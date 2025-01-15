import google.generativeai as genai  # type: ignore
import streamlit as st  # type: ignore

# Configure the API key
API_KEY = "AIzaSyDeW0DQ1im3YofZLg8vRrz-ufbbpPfjHgc"
genai.configure(api_key=API_KEY)

# Function to generate study resource recommendations
def recommend_resources(topic):
    prompt = (f"Provide a list of recommended study resources, including books, websites, online courses, and articles, "
              f"for the topic: '{topic}'. Ensure the recommendations are well-categorized and concise.")
    
    model = genai.GenerativeModel("gemini-pro")
    chat = model.start_chat(history=[])

    response = chat.send_message(prompt, stream=True)
    generated_text = ""
    
    for chunk in response:
        generated_text += chunk.text
    
    return generated_text.strip()

# Streamlit app layout
st.title("Study Resource Recommender")

# Input field for the topic or subject
topic = st.text_input("Enter a topic or subject:")

if st.button("Get Recommendations"):
    if topic:
        recommendations = recommend_resources(topic)
        st.subheader("Recommended Study Resources:")
        st.write(recommendations)
    else:
        st.warning("Please enter a topic or subject to get recommendations.")
