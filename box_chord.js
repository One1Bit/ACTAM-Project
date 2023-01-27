
// The first version: the scale generate one by one


window.onload = function() {
    // Get the select elements by their id
    let keySelect = document.getElementById("key");
    let signatureSelect = document.getElementById("signature");
    let majSelect = document.getElementById("maj");
    let scale = document.getElementById("scale_in_key");

    // Add an event listener to the key select element
    keySelect.addEventListener("change", function() {
        // Get the selected values of the signature and majmin select elements
        let selectedSignature = signatureSelect.value;
        let selectedmaj = majSelect.value;
        // Check if the selected key is "C", the selected signature is "" and the selected majmin is "Major"
        if (keySelect.value === "C" && selectedSignature === "" && selectedmaj === "Major") {
            // If the conditions are true, set the innerHTML of the scale element to "CDEFGAB" and make it visible
            scale.innerHTML = "CDEFGAB";
            scale.style.display = "block";
        } else {
            // If the conditions are not met, hide the scale element
            scale.style.display = "none";
        }
    });
}


