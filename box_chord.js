
window.onload = function() {
    const key = document.getElementById("key");
    const signature = document.getElementById("signature");
    const majmin = document.getElementById("majmin");
    const submitBtn = document.getElementById("submit_btn");
    const scaleInKey = document.getElementById("scale_in_key");

    submitBtn.addEventListener("click", function () {
        // 获取用户输入的值
        const keyValue = key.value;
        const signatureValue = signature.value;
        const majminValue = majmin.value;

        // 根据用户输入的值显示相应的音阶
        if (keyValue === "C" && signatureValue === "Natural" && majminValue === "Major") {
            scaleInKey.innerHTML = "C D E F G A B";
        } else if (keyValue === "D" && signatureValue === "Natural" && majminValue === "Major") {
            scaleInKey.innerHTML = "D E F# G A B C#";
        } else if (keyValue === "E" && signatureValue === "Natural" && majminValue === "Major") {
            scaleInKey.innerHTML = "E F# G# A B C# D#";
        } else if (keyValue === "F" && signatureValue === "Natural" && majminValue === "Major") {
            scaleInKey.innerHTML = "F G A Bb C D E";
        }else if (keyValue === "G" && signatureValue === "Natural" && majminValue === "Major") {
            scaleInKey.innerHTML = "G A B C D E F#";
        } else if (keyValue === "A" && signatureValue === "Natural" && majminValue === "Major") {
            scaleInKey.innerHTML = "A B C# D E F# G#";
        } else if (keyValue === "B" && signatureValue === "Natural" && majminValue === "Major") {
            scaleInKey.innerHTML = "B C# D# E F# G# A#";

        } else if (keyValue === "C" && signatureValue === "Sharp" && majminValue === "Major") {
            scaleInKey.innerHTML = "C# D# E# F# G# A# B#";
        } else if (keyValue === "D" && signatureValue === "Sharp" && majminValue === "Major") {
            scaleInKey.innerHTML = "D# E# F## G# A# B# C##";
        } else if (keyValue === "E" && signatureValue === "Sharp" && majminValue === "Major") {
            scaleInKey.innerHTML = "E# F## G## A# B# C## D##";
        } else if (keyValue === "F" && signatureValue === "Sharp" && majminValue === "Major") {
            scaleInKey.innerHTML = "F# G# A# B C# D# E#";
        } else if (keyValue === "G" && signatureValue === "Sharp" && majminValue === "Major") {
            scaleInKey.innerHTML = "G# A# B# C# D# E# F##";
        } else if (keyValue === "A" && signatureValue === "Sharp" && majminValue === "Major") {
            scaleInKey.innerHTML = "A# B# C## D# E# F## G##";
        } else if (keyValue === "B" && signatureValue === "Sharp" && majminValue === "Major") {
            scaleInKey.innerHTML = "B# C## D## E# F## G## A##";

        } else if (keyValue === "C" && signatureValue === "Flat" && majminValue === "Major") {
            scaleInKey.innerHTML = "Cb Db Eb Fb Gb Ab Bb";
        } else if (keyValue === "D" && signatureValue === "Flat" && majminValue === "Major") {
            scaleInKey.innerHTML = "Db Eb F Gb Ab Bb C";
        } else if (keyValue === "E" && signatureValue === "Flat" && majminValue === "Major") {
            scaleInKey.innerHTML = "Eb F G Ab Bb C D";
        } else if (keyValue === "F" && signatureValue === "Flat" && majminValue === "Major") {
            scaleInKey.innerHTML = "Fb Gb Ab Bbb Cb Db Eb";
        } else if (keyValue === "G" && signatureValue === "Flat" && majminValue === "Major") {
            scaleInKey.innerHTML = "Gb Ab Bb Cb Db Eb F";
        } else if (keyValue === "A" && signatureValue === "Flat" && majminValue === "Major") {
            scaleInKey.innerHTML = "Ab Bb C Db Eb F G";
        } else if (keyValue === "B" && signatureValue === "Flat" && majminValue === "Major") {
            scaleInKey.innerHTML = "Bb C D Eb F G A";

        } else if (keyValue === "C" && signatureValue === "Natural" && majminValue === "Minor") {
            scaleInKey.innerHTML = "C D Eb F G Ab Bb";
        } else if (keyValue === "D" && signatureValue === "Natural" && majminValue === "Minor") {
            scaleInKey.innerHTML = "D E F G A Bb C";
        } else if (keyValue === "E" && signatureValue === "Natural" && majminValue === "Minor") {
            scaleInKey.innerHTML = "E F# G A B C D";
        } else if (keyValue === "F" && signatureValue === "Natural" && majminValue === "Minor") {
            scaleInKey.innerHTML = "F G Ab Bb C Db Eb";
        } else if (keyValue === "G" && signatureValue === "Natural" && majminValue === "Minor") {
            scaleInKey.innerHTML = "G A Bb C D Eb F";
        } else if (keyValue === "A" && signatureValue === "Natural" && majminValue === "Minor") {
            scaleInKey.innerHTML = "A B C D E F G";
        } else if (keyValue === "B" && signatureValue === "Natural" && majminValue === "Minor") {
            scaleInKey.innerHTML = "B C# D E F# G A";

        } else if (keyValue === "C" && signatureValue === "Sharp" && majminValue === "Minor") {
            scaleInKey.innerHTML = "C# D# E F# G# A B";
        } else if (keyValue === "D" && signatureValue === "Sharp" && majminValue === "Minor") {
            scaleInKey.innerHTML = "D# E# F# G# A# B C#";
        } else if (keyValue === "E" && signatureValue === "Sharp" && majminValue === "Minor") {
            scaleInKey.innerHTML = "E# F## G# A# B# C# D#";
        } else if (keyValue === "F" && signatureValue === "Sharp" && majminValue === "Minor") {
            scaleInKey.innerHTML = "F# G# A B C# D E";
        } else if (keyValue === "G" && signatureValue === "Sharp" && majminValue === "Minor") {
            scaleInKey.innerHTML = "G# A# B C# D# E F#";
        } else if (keyValue === "A" && signatureValue === "Sharp" && majminValue === "Minor") {
            scaleInKey.innerHTML = "A# B# C# D# E# F# G#";
        } else if (keyValue === "B" && signatureValue === "Sharp" && majminValue === "Minor") {
            scaleInKey.innerHTML = "B# C## D# E# F## G# A#";

        } else if (keyValue === "C" && signatureValue === "Flat" && majminValue === "Minor") {
            scaleInKey.innerHTML = "Cb Db Ebb Fb Gb Abb Bbb";
        } else if (keyValue === "D" && signatureValue === "Flat" && majminValue === "Minor") {
            scaleInKey.innerHTML = "Db Eb Fb Gb Ab Bbb Cb";
        } else if (keyValue === "E" && signatureValue === "Flat" && majminValue === "Minor") {
            scaleInKey.innerHTML = "Eb F Gb Ab Bb Cb Db";
        } else if (keyValue === "F" && signatureValue === "Flat" && majminValue === "Minor") {
            scaleInKey.innerHTML = "Fb Gb Abb Bbb Cb Dbb Ebb";
        } else if (keyValue === "G" && signatureValue === "Flat" && majminValue === "Minor") {
            scaleInKey.innerHTML = "Gb Ab Bbb Cb Db Ebb Fb";
        } else if (keyValue === "A" && signatureValue === "Flat" && majminValue === "Minor") {
            scaleInKey.innerHTML = "Ab Bb Cb Db Eb Fb Gb";
        } else if (keyValue === "B" && signatureValue === "Flat" && majminValue === "Minor") {
            scaleInKey.innerHTML = "Bb C Db Eb F Gb Ab";
        }
    });
}