window.onload = () => {

    let button = document.querySelector("#submit");
    
    button.addEventListener("click", calculateBMI);} 

function calculateBMI() {

    let height = parseInt(document
        .querySelector("#height").value);

let weight = parseInt(document
    .querySelector("#weight").value);

    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";
 
    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";
 
    // If both input is valid, calculate the bmi
    else {
 
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height)
                            / 10000)).toFixed(2);
 
        // Dividing as per the bmi conditions
        if (bmi < 18.5) result.innerHTML =
            `Under Weight : <span>${bmi}</span> <div>
            Anda berada dalam kategori kekurangan berat badan.
            Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.</div>`;
 
        else if (bmi >= 18.5 && bmi < 24.9)
        result.innerHTML =
                `Normal : <span>${bmi}</span> <div>
                Anda memiliki berat badan ideal. Good job!!</div>`;
 
        else if (bmi >= 25 && bmi < 29.9)
        result.innerHTML =
            `Over Weight : <span>${bmi}</span> <div>
            Anda berada dalam kategori overweight atau berat badan berlebih.
            Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. </div>`;
        
            else result.innerHTML =
            `Obesitas : <span>${bmi}</span> <div>
            Anda berada dalam kategori obesitas.
            Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.
            Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan. </div>`;
    }
}    
