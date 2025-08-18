import streamlit as st
import pandas as pd
import cv2, requests, time, csv
import numpy as np
from PIL import Image
import easyocr, pytesseract, difflib

# =============================
# Initialisation
# =============================
reader = easyocr.Reader(['fr','en','de','la'], gpu=False)
st.title("📜 OCR Annotator (Handwriting & Print)")
st.write("Upload an image URL, run OCR, annotate and download CSV")

# =============================
# Fonctions utilitaires
# =============================
def load_image_from_url(url):
    try:
        response = requests.get(url, timeout=10)
        img_array = np.asarray(bytearray(response.content), dtype=np.uint8)
        image = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
        return image
    except Exception as e:
        st.error(f"Erreur lors du chargement de l'image: {e}")
        return None

def compare_texts(ocr_text, user_text):
    if user_text.strip().upper() == "FALSE":
        return 0
    ocr_normalized = ocr_text.strip().lower().replace(' ', '')
    user_normalized = user_text.strip().lower().replace(' ', '')
    if ocr_normalized == user_normalized:
        return 2
    ratio = difflib.SequenceMatcher(None, ocr_normalized, user_normalized).ratio()
    if ratio >= 0.9:
        return 2
    elif ratio >= 0.7:
        return 1
    return 0

# =============================
# Interface utilisateur
# =============================
url = st.text_input("Image URL:")
handwriting_mode = st.checkbox("Handwriting Mode")

if st.button("🔍 Run OCR") and url:
    image = load_image_from_url(url)
    if image is not None:
        st.image(image, caption="Image chargée", use_column_width=True)

        # OCR avec EasyOCR (tu peux ajouter Tesseract + Hybrid si tu veux)
        results = reader.readtext(image)

        annotations = []
        for (bbox, text, prob) in results:
            coords = str(bbox)
            st.write(f"OCR: **{text}** (conf: {prob:.2f})")
            correction = st.text_input(f"Correction pour '{text}'", key=text+coords)

            if correction:
                grade = compare_texts(text, correction)
                annotations.append([url, coords, text, correction, grade, prob, "handwriting" if handwriting_mode else "print"])

        # Générer CSV si des annotations existent
        if annotations:
            df = pd.DataFrame(annotations, columns=["image_url","coords","ocr_text","user_text","grade","confidence","mode"])
            st.dataframe(df)

            csv_bytes = df.to_csv(index=False).encode("utf-8")
            st.download_button(
                label="⬇️ Télécharger CSV",
                data=csv_bytes,
                file_name=f"annotations_{int(time.time())}.csv",
                mime="text/csv"
            )
