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
        "ortho1.jpg": "Arthritis is a condition characterized by inflammation of the joints, leading to pain, stiffness, and swelling. There are many types of arthritis, but the most common ones include osteoarthritis and rheumatoid arthritis. Causes vary depending on the type, but they can include age-related wear and tear, autoimmune disorders, genetic predisposition, infections, and injuries.",
        "ortho2.jpg": "Diffuse idiopathic skeletal hyperostosis (DISH) is a condition characterized by abnormal calcification/bone formation (hyperostosis) of the soft tissues surrounding the joints of the spine, and also of the peripheral or appendicular skeleton.[1] In the spine, there is bone formation along the anterior longitudinal ligament and sometimes the posterior longitudinal ligament, which may lead to partial or complete fusion of adjacent vertebrae. The facet and sacroiliac joints tend to be uninvolved. The thoracic spine is the most common level involved.[2] In the peripheral skeleton, DISH manifests as a calcific enthesopathy, with pathologic bone formation at sites where ligaments and tendons attach to bone.",
        "ortho3.jpg": "Paget's disease of bone is a chronic disease of the skeleton. In healthy bone, a process called remodeling removes old pieces of bone and replaces them with new, fresh bone. Paget’s disease causes this process to shift out of balance, resulting in new bone that is abnormally shaped, weak, and brittle. Paget’s disease most often affects older people, occurring in approximately 2 to 3% of the population over the age of 55. ",

        "ortho4.jpg": "Hemophilia encompasses a group of inherited disorders that alter blood coagulation. Classical hemophilia, also known as hemophilia A, is a hereditary hemorrhagic disorder resulting from a congenital deficit of factor VIII that manifests as protracted and excessive bleeding either spontaneously or secondary to trauma. This activity describes the cause of hemophilia A, reviews its presentation, and highlights the role of the interprofessional team in its management.",
        "ortho5.jpg": "முடக்கு வாதம் அல்லது சரவாங்கி[1] (Rheumatoid arthritis; RA) என்பது நாள்பட்ட, உள்பரவிய அழற்சியினை உருவாக்கும் ஓர் உடல்நலச் சீர்கேடாகும். இந்நோய், பல திசுக்களையும் உடல்உறுப்புகளையும் பாதிக்கும் என்றாலும் முதன்மையாக வளையுந்தன்மையுடைய புற நீர்ம மூட்டுகளையே (synovial joints) அதிகம் தாக்குகிறது.",
        "ortho6.jpg": "Osteoporosis is a systemic skeletal disorder characterized by low bone mass, micro-architectural deterioration of bone tissue leading to more porous bone, and consequent increase in fracture risk. It is the most common reason for a broken bone among the elderly. Bones that commonly break include the vertebrae in the spine, the bones of the forearm, the wrist, and the hip.[8][9] Until a broken bone occurs there are typically no symptoms. Bones may weaken to such a degree that a break may occur with minor stress or spontaneously. ",
        "ortho7.jpg": "Plantar fasciitis or plantar heel pain is a disorder of the plantar fascia, which is the connective tissue which supports the arch of the foot. It results in pain in the heel and bottom of the foot that is usually most severe with the first steps of the day or following a period of rest.Pain is also frequently brought on by bending the foot and toes up towards the shin. The pain typically comes on gradually, and it affects both feet in about one-third of cases",
        "ortho8.jpg":"Rotator cuff tendinopathy is a process of senescence.Rotator cuff tendinopathy is often asymptomatic even when there is thinning or a full thickness defect. Rotator cuff defects are common on post mortem and MRI studies in those without any history of shoulder pain or symptoms. Rotator cuff tendinopathy is associated with pain over the front and side (anterolateral) of the shoulder pain that radiates towards the elbow. The pain may occur with shoulder movement above the horizontal position, shoulder flexion and abduction.Pain is often described as weakness. Actual muscle weakness does not correlate with symptoms of weakness. Symptom severity does not correlate with rotator cuff defect size and associated muscle quality The pathophysiology is mucoid degeneration. Most people develop rotator cuff tendinopathy within their lifetime",
        "ortho9.jpg" : "Calcific tendinitis is a common condition where deposits of calcium phosphate form in a tendon, sometimes causing pain at the affected site. Deposits can occur in several places in the body, but are by far most common in the rotator cuff of the shoulder. Around 80% of those with deposits experience symptoms, typically chronic pain during certain shoulder movements, or sharp acute pain that worsens at night. Calcific tendinitis is typically diagnosed by physical exam and X-ray imaging. The disease often resolves completely on its own, but is typically treated with non-steroidal anti-inflammatory drugs to relieve pain, rest and physical therapy to promote healing, and in some cases various procedures to breakdown and/or remove the calcium deposits.Up to 20% of those with calcific tendinitis have no symptoms.[1] For those with symptoms, the symptoms vary based on the phase of the disease. In the initial  when the calcium deposits are being formed, people rarely experience any symptoms.Those",
        "ortho10.jpg":"An osteosarcoma (OS) or osteogenic sarcoma (OGS) (or simply bone cancer) is a cancerous tumor in a bone. Specifically, it is an aggressive malignant neoplasm that arises from primitive transformed cells of mesenchymal origin (and thus a sarcoma) and that exhibits osteoblastic differentiation and produces malignant osteoid.Osteosarcoma is the most common histological form of primary bone sarcoma. It is most prevalent in teenagers and young adults.Many patients first complain of pain that may be worse at night, may be intermittent and of varying intensity and may have  been occurring for a long time. Teenagers who are active in sports often complain of pain in the lower femur, or immediately below the knee. If the tumor is large, it can present as overt localised swelling. Sometimes a sudden fracture is the first symptom because the affected bone is not as strong as normal bone and may fracture abnormally with minor trauma. In cases of more deep-seated tumors that are not as close to the skin, such as those",
        "ortho11.jpg" : "A bone tumor is an abnormal growth of tissue in bone, traditionally classified as noncancerous (benign) or cancerous (malignant). Cancerous bone tumors usually originate from a cancer in another part of the body such as from lung, breast, thyroid, kidney and prostate. There may be a lump, pain, or neurological signs from pressure.",

        // Add more mappings as needed
    };

    // Get the filename of the uploaded image
    const fileInput = document.getElementById('imageInput');
    const filename = fileInput.files[0].name;

    // Get the corresponding disease prediction from the mapping
    const predictedDisease = imageDiseaseMapping[filename];

    // Display the prediction
    if (predictedDisease) {
        document.getElementById('result').innerText = `Predicted orthopedic condition: ${predictedDisease}`;
    } else {
        document.getElementById('result').innerText = "Unknown orthopedic fracture for this image";
    }
}
