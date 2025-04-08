let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
let hostname = document.querySelector("#host-name");
hostname.innerText = "Yicheng";

let collaborate1Name = document.querySelector("#collaborator-name");
collaborate1Name.innerText = "Harsha";

let collaborate2Name = document.querySelector("#collaborator-2-name");
collaborate2Name.innerText = "";



// Question 2
// You can also create their own CSS classes in style.css file and use that. 




// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");

firstNameInput.addEventListener("input", function () {
    if (firstNameInput.value === "John") {
        lastNameInput.value = "Doe";
    }
});


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.
let usernameInput = document.getElementById("user_name");
let alertText = document.getElementById("username-alert");

usernameInput.addEventListener("input", function () {
    let enteredName = usernameInput.value;
    if (enteredName === "") {
        alertText.textContent = "";
        return;
    }

    let exists = pokemonList.includes(enteredName);
    if (exists) {
        alertText.textContent = "Username already exists";
    }
});


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const passwordAlert = document.getElementById("password-alert");
    const hidePasswordButton = document.getElementById("hide-password");

    // 1. Check password match
    function checkPasswordMatch() {
        if (passwordInput.value === "" && confirmPasswordInput.value === "") {
            passwordAlert.textContent = "";
            return;
        }

        if (passwordInput.value === confirmPasswordInput.value) {
            passwordAlert.textContent = "Password Matches";
        } else {
            passwordAlert.textContent = "Password does not match";
        }
    }

    passwordInput.addEventListener("input", checkPasswordMatch);
    confirmPasswordInput.addEventListener("input", checkPasswordMatch);

    // 2. Toggle password visibility
    let isPasswordHidden = true;

    function togglePasswordVisibility() {
        const type = isPasswordHidden ? "text" : "password";
        passwordInput.type = type;
        confirmPasswordInput.type = type;
        hidePasswordButton.textContent = isPasswordHidden ? "Show Password" : "Hide Password";
        isPasswordHidden = !isPasswordHidden;
    }

    hidePasswordButton.addEventListener("click", togglePasswordVisibility);

    // 3. Add keyboard shortcut 'h'
    document.addEventListener("keydown", function (event) {
        if (event.key.toLowerCase() === "h") {
            togglePasswordVisibility();
        }
    });
});




//Question 6
document.addEventListener("DOMContentLoaded", function () {
    const radioResetButton = document.getElementById("radio-reset-button");
    // selectall
    const radioButtons = document.querySelectorAll("input[name='favorite_day']");

    radioResetButton.addEventListener("click", function () {
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
    });
});





//Question 7 
document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("profile_pic");

    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];

        if (file && file.size > 102400) { // 100KB in bytes
            alert("The selected file is too large. Please choose an image smaller than 100KB.");
            fileInput.value = ""; // This clears the file input
        }
    });
});





//Question 8
let colorPickerInput = document.querySelector("#color-picker");
colorPickerInput.addEventListener('input', changeBackgroundColor);
function changeBackgroundColor() {
    console.log(colorPickerInput.value);
    // Formula: document.tag.style
    // .body {background-color = #000000}
    document.body.style.backgroundColor = colorPickerInput.value;
}



//Question 9 
document.addEventListener("DOMContentLoaded", function () {
    const resetFormButton = document.querySelector(".reset-form-button");
    const form = document.querySelector("form");

    function resetForm() {
        form.reset();

        // Optional: clear custom alert messages or values not reset by .reset()
        document.getElementById("username-alert").textContent = "";
        document.getElementById("password-alert").textContent = "";
        document.getElementById("last_name").value = "";
    }

    // Click on button resets the form
    resetFormButton.addEventListener("click", resetForm);

    // Pressing 'r' key also resets the form
    document.addEventListener("keydown", function (event) {
        if (event.key === "r") {
            resetForm();
        }
    });
});

