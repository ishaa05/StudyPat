import google.generativeai as genai  # type: ignore
import streamlit as st  # type: ignore

# Configure the API key
API_KEY = "AIzaSyDeW0DQ1im3YofZLg8vRrz-ufbbpPfjHgc"
genai.configure(api_key=API_KEY)

# Function to assist with writing
def writing_assistant(prompt_text):
    prompt = (f"Assist in writing based on the following input: '{prompt_text}'. "
              f"Provide suggestions, improvements, or a continuation depending on the context.")
    
    model = genai.GenerativeModel("gemini-pro")
    chat = model.start_chat(history=[])

    response = chat.send_message(prompt, stream=True)
    generated_text = ""
    
    for chunk in response:
        generated_text += chunk.text
    
    return generated_text.strip()

# Streamlit app layout
st.title("Writing Assistant")

# Input field for the writing prompt
prompt_text = st.text_area("Enter your writing prompt or text:")

if st.button("Get Assistance"):
    if prompt_text:
        suggestions = writing_assistant(prompt_text)
        st.subheader("Writing Suggestions:")
        st.write(suggestions)
    else:
        st.warning("Please enter a writing prompt or text to get assistance.")
