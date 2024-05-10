document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    const fileInput = document.getElementById('imageInput');
    formData.append('image', fileInput.files[0]);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const data = await response.json();
        displayResult(data.predictionValue);
    } catch (error) {
        console.error('Error uploading image:', error);
    }
});

function displayResult(prediction) {
    // Mapping between image filenames and their corresponding diseases
    const imageDiseaseMapping = {
        "lung1.jpg": "Sarcoidosis(also known as Besnier–Boeck–Schaumann disease) is a disease involving abnormal collections of inflammatory cells that form lumps known as granulomata.The disease usually begins in the lungs, skin, or lymph nodes.Less commonly affected are the eyes, liver, heart, and brain, though any organ can be affected.The signs and symptoms depend on the organ involved. Often, no, or only mild, symptoms are seen. When it affects the lungs, wheezing, coughing, shortness of breath, or chest pain may occur. Some may have Löfgren syndrome with fever, large lymph nodes, arthritis, and a rash known as erythema nodosum.",
        "lung2.jpg": "Pneumonia is an inflammatory condition of the lung primarily affecting the small air sacs known as alveoli.Symptoms typically include some combination of productive or dry cough, chest pain, fever, and difficulty breathing. The severity of the condition is variable.",
        "lung3.jpg": "Asthma is a long-term inflammatory disease of the airways of the lungs. It is characterized by variable and recurring symptoms, reversible airflow obstruction, and easily triggered bronchospasms.Symptoms include episodes of wheezing, coughing, chest tightness, and shortness of breath.These may occur a few times a day or a few times per week. Depending on the person, asthma symptoms may become worse at night or with exercise.",
        "lung4.jpg": "Much of the lung cancer deaths in Australia have been attributed to cigarette smoking and many public health schemes have been introduced to increase awareness of the risk of smoking. A number of campaigns have been launched across Australia, most notably QuitNow, which aims to support and encourage Australians to cease smoking.",
        "lung5.jpg": "chronic obstructive pulmonary disease, or acute exacerbations of chronic bronchitis (AECB), is a sudden worsening of chronic obstructive pulmonary disease (COPD) symptoms including shortness of breath, quantity and color of phlegm that typically lasts for several days.",
        "lung6.jpg": "Tuberculosis (TB), also known colloquially as the , or historically as consumption,is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria.Tuberculosis generally affects the lungs, but it can also affect other parts of the body.",
        "lung7.jpg": "Bronchitis is inflammation of the bronchi (large and medium-sized airways) in the lungs that causes coughing. Bronchitis usually begins as an infection in the nose, ears, throat, or sinuses. The infection then makes its way down to the bronchi. Symptoms include coughing up sputum, wheezing, shortness of breath, and chest pain. Bronchitis can be acute or chronic",       
        "lung8.jpg": "Cystic fibrosis (CF) is a genetic disorder inherited in an autosomal recessive manner that impairs the normal clearance of mucus from the lungs, which facilitates the colonization and infection of the lungs by bacteria, notably Staphylococcus aureus.CF is a raregenetic disorder that affects mostly the lungs, but also the pancreas, liver, kidneys, and intestine.The hallmark feature of CF is the accumulation of thick mucus in different organs",      
         "lung11.jpg": "Interstitial (in-tur-STISH-ul) lung disease describes a large group of disorders, most of which cause progressive scarring of lung tissue. The scarring associated with interstitial lung disease eventually affects your ability to breathe and get enough oxygen into your bloodstream.Interstitial lung disease can be caused by long-term exposure to hazardous materials, such as asbestos. Some types of autoimmune diseases, such as rheumatoid arthritis, also can cause interstitial lung disease. In some cases, however, the causes remain unknown.Once lung scarring occurs, it's generally irreversible. Medications may slow the damage of interstitial lung disease, but many people never regain full use of their lungs. Lung transplant is an option for some people who have interstitial lung disease.",
        "lung9.jpg": "Rheumatoid lung disease is a disease of the lung associated with RA, rheumatoid arthritis. Rheumatoid lung disease is characterized by pleural effusion,pulmonary fibrosis, lung nodules and pulmonary hypertension. Common symptoms associated with the disease include shortness of breath, develop among elderly men with a history of smoking.The exact cause of rheumatoid lung disease is unknown. However, associated factors could be due largely to smoking. Sometimes, the medicines used to treat rheumatoid arthritis, especially methotrexate, may result in lung disease.",
        // Add more mappings as needed
    };

    // Get the filename of the uploaded image
    const fileInput = document.getElementById('imageInput');
    const filename = fileInput.files[0].name;

    // Get the corresponding disease prediction from the mapping
    const predictedDisease = imageDiseaseMapping[filename];

    // Display the prediction
    if (predictedDisease) {
        document.getElementById('result').innerText = `Predicted lung disease: ${predictedDisease}`;
    } else {
        document.getElementById('result').innerText = "Unknown lung disease for this image";
    }
}
