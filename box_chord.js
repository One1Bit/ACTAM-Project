window.onload = function() {
    const key = document.getElementById("key");
    const signature = document.getElementById("signature");
    const majmin = document.getElementById("majmin");
    const submitBtn = document.getElementById("submit_btn");
    const scaleInKey = document.getElementById("scale_in_key");
    const submitChord = document.getElementById("submit_chord");
    const ChordInKey = document.getElementById("chord_in_key");
    let numbers = ["I&nbsp&nbsp&nbsp", "II&nbsp&nbsp", "III&nbsp", "IV&nbsp ", "V&nbsp&nbsp", "VI&nbsp ", "VII"];
    let notes = [];

    submitBtn.addEventListener("click", function () {
        const keyValue = key.value;
        const signatureValue = signature.value;
        const majminValue = majmin.value;

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
    }
    );

    function formatChords(numbers, notes) {
        let chords = "";
        for (let i = 0; i < notes.length; i++) {
            chords += numbers[i] + " &nbsp "+ notes[i] + "<br>";
        }
        return chords;
    }

    submitChord.addEventListener("click", function () {
            const keyValue = key.value;
            const signatureValue = signature.value;
            const majminValue = majmin.value;

            if (keyValue === "C" && signatureValue === "Natural" && majminValue === "Major") {
                notes = ["Cmaj7","Dm7", "Em7", "Fmaj7", "G7", "Am7", "Bm7b5"];
            }
            else if (keyValue === "D" && signatureValue === "Natural" && majminValue === "Major") {
                notes = ["Dmaj7", "Em7", "F#m7", "Gmaj7", "A7", "Bm7", "C#m7b5"];
            }
            else if (keyValue === "E" && signatureValue === "Natural" && majminValue === "Major") {
                notes = ["Emaj7", "F#m7", "G#m7", "Amaj7", "B7", "C#m7", "D#m7b5"];
            }
            else if (keyValue === "F" && signatureValue === "Natural" && majminValue === "Major") {
                notes = ["Fmaj7", "Gm7", "Am7", "Bbmaj7", "C7", "Dm7", "Em7b5"];
            }
            else if (keyValue === "G" && signatureValue === "Natural" && majminValue === "Major") {
                notes = ["Gmaj7", "Am7", "Bm7", "Cmaj7", "D7", "Em7", "F#m7b5"];
            }
            else if (keyValue === "A" && signatureValue === "Natural" && majminValue === "Major") {
                notes = ["Amaj7", "Bm7", "C#m7", "Dmaj7", "E7", "F#m7", "G#m7b5"];
            }
            else if (keyValue === "B" && signatureValue === "Natural" && majminValue === "Major") {
                notes = ["Bmaj7", "C#m7", "D#m7", "Emaj7", "F#7", "G#m7", "A#m7b5"];
            }

            else if (keyValue === "C" && signatureValue === "Sharp" && majminValue === "Major") {
                notes = ["C#maj7", "D#m7", "E#m7", "F#maj7", "G#7", "A#m7", "B#m7b5" ];
            }
            else if (keyValue === "D" && signatureValue === "Sharp" && majminValue === "Major") {
                notes = ["D#maj7", "E#m7", "F##m7", "G#maj7", "A#7", "B#m7", "C##m7b5"];
            }
            else if (keyValue === "E" && signatureValue === "Sharp" && majminValue === "Major") {
                notes = ["E#maj7", "F##m7", "G##m7", "A#maj7", "B#7", "C##m7", "D##m7b5"];
            }
            else if (keyValue === "F" && signatureValue === "Sharp" && majminValue === "Major") {
                notes = ["F#maj7", "G#m7", "A#m7", "Bmaj7", "C#7", "D#m7", "E#m7b5"];
            }
            else if (keyValue === "G" && signatureValue === "Sharp" && majminValue === "Major") {
                notes = ["G#maj7", "A#m7", "B#m7", "C#maj7", "D#7", "E#m7", "F##m7b5"];
            }
            else if (keyValue === "A" && signatureValue === "Sharp" && majminValue === "Major") {
                notes = ["A#maj7", "B#m7", "C##m7", "D#maj7", "E#7", "F##m7", "G##m7b5"];
            }
            else if (keyValue === "B" && signatureValue === "Sharp" && majminValue === "Major") {
                notes = ["B#maj7", "C##m7", "D##m7", "E#maj7", "F##7", "G##m7", "A##m7b5"];
            }

        else if (keyValue === "C" && signatureValue === "Flat" && majminValue === "Major") {
            notes = ["Cbmaj7","Dbm7", "Ebm7", "Fbmaj7", "Gb7", "Abm7", "Bbm7b5"];
        }
        else if (keyValue === "D" && signatureValue === "Flat" && majminValue === "Major") {
            notes = ["Dbmaj7", "Ebm7", "Fm7", "Gbmaj7", "Ab7", "Bbm7", "Cm7b5"];
        }
        else if (keyValue === "E" && signatureValue === "Flat" && majminValue === "Major") {
            notes = ["Ebmaj7", "Fm7", "Gm7", "Abmaj7", "Bb7", "Cm7", "Dm7b5"];
        }
        else if (keyValue === "F" && signatureValue === "Flat" && majminValue === "Major") {
            notes = ["Fbmaj7", "Gbm7", "Abm7", "Bbbmaj7", "Cb7", "Dbm7", "Ebm7b5"];
        }
        else if (keyValue === "G" && signatureValue === "Flat" && majminValue === "Major") {
            notes = ["Gbmaj7", "Abm7", "Bbm7", "Cbmaj7", "Db7", "Ebm7", "Fm7b5"];
        }
        else if (keyValue === "A" && signatureValue === "Flat" && majminValue === "Major") {
            notes = ["Abmaj7", "Bbm7", "Cm7", "Dbmaj7", "Eb7", "Fm7", "Gm7b5"];
        }
        else if (keyValue === "B" && signatureValue === "Flat" && majminValue === "Major") {
            notes = ["Bbmaj7", "Cm7", "Dm7", "Ebmaj7", "F7", "Gm7", "Am7b5"];
        }

        else if (keyValue === "C" && signatureValue === "Natural" && majminValue === "Minor") {
            notes = ["Cm7","Dm7b5", "Ebmaj7", "Fm7", "Gm7", "Abmaj7", "Bb7"];
        }
        else if (keyValue === "D" && signatureValue === "Natural" && majminValue === "Minor") {
            notes = ["Dm7", "Em7b5", "Fmaj7", "Gm7", "Am7", "Bbmaj7", "C7"];
        }
        else if (keyValue === "E" && signatureValue === "Natural" && majminValue === "Minor") {
            notes = ["Em7", "F#m7b5", "Gmaj7", "Am7", "Bm7", "Cmaj7", "D7"];
        }
        else if (keyValue === "F" && signatureValue === "Natural" && majminValue === "Minor") {
            notes = ["Fm7", "Gm7b5", "Abmaj7", "Bbm7", "Cm7", "Dbmaj7", "Eb7"];
        }
        else if (keyValue === "G" && signatureValue === "Natural" && majminValue === "Minor") {
            notes = ["Gm7", "Am7b5", "Bbmaj7", "Cm7", "Dm7", "Ebmaj7", "F7"];
        }
        else if (keyValue === "A" && signatureValue === "Natural" && majminValue === "Minor") {
            notes = ["Am7", "Bm7b5", "Cmaj7", "Dm7", "Em7", "Fmaj7", "G7"];
        }
        else if (keyValue === "B" && signatureValue === "Natural" && majminValue === "Minor") {
            notes = ["Bm7", "C#m7b5", "Dmaj7", "Em7", "F#m7", "Gmaj7", "A7"];
        }

        else if (keyValue === "C" && signatureValue === "Sharp" && majminValue === "Minor") {
            notes = ["C#m7","D#m7b5", "Emaj7", "F#m7", "G#m7", "Amaj7", "B7"];
        }
        else if (keyValue === "D" && signatureValue === "Sharp" && majminValue === "Minor") {
            notes = ["D#m7", "E#m7b5", "F#maj7", "G#m7", "A#m7", "Bmaj7", "C#7"];
        }
        else if (keyValue === "E" && signatureValue === "Sharp" && majminValue === "Minor") {
            notes = ["E#m7", "F##m7b5", "G#maj7", "A#m7", "B#m7", "C#maj7", "D#7"];
        }
        else if (keyValue === "F" && signatureValue === "Sharp" && majminValue === "Minor") {
            notes = ["F#m7", "G#m7b5", "Amaj7", "Bm7", "C#m7", "Dmaj7", "E7"];
        }
        else if (keyValue === "G" && signatureValue === "Sharp" && majminValue === "Minor") {
            notes = ["G#m7", "A#m7b5", "Bmaj7", "C#m7", "D#m7", "Emaj7", "F#7"];
        }
        else if (keyValue === "A" && signatureValue === "Sharp" && majminValue === "Minor") {
            notes = ["A#m7", "B#m7b5", "C#maj7", "D#m7", "E#m7", "F#maj7", "G#7"];
        }
        else if (keyValue === "B" && signatureValue === "Sharp" && majminValue === "Minor") {
            notes = ["B#m7", "C##m7b5", "D#maj7", "E#m7", "F##m7", "G#maj7", "A#7"];
        }

        else if (keyValue === "C" && signatureValue === "Flat" && majminValue === "Minor") {
            notes = ["Cbm7","Dbm7b5", "Ebbmaj7", "Fbm7", "Gbm7", "Abbmaj7", "Bbb7"];
        }
        else if (keyValue === "D" && signatureValue === "Flat" && majminValue === "Minor") {
            notes = ["Dbm7", "Ebm7b5", "Fbmaj7", "Gbm7", "Abm7", "Bbbmaj7", "Cb7"];
        }
        else if (keyValue === "E" && signatureValue === "Flat" && majminValue === "Minor") {
            notes = ["Ebm7", "Fm7b5", "Gbmaj7", "Abm7", "Bbm7", "Cbmaj7", "Db7"];
        }
        else if (keyValue === "F" && signatureValue === "Flat" && majminValue === "Minor") {
            notes = ["Fbm7", "Gbm7b5", "Abbmaj7", "Bbbm7", "Cbm7", "Dbbmaj7", "Ebb7"];
        }
        else if (keyValue === "G" && signatureValue === "Flat" && majminValue === "Minor") {
            notes = ["Gbm7", "Abm7b5", "Bbbmaj7", "Cbm7", "Dbm7", "Ebbmaj7", "Fb7"];
        }
        else if (keyValue === "A" && signatureValue === "Flat" && majminValue === "Minor") {
            notes = ["Abm7", "Bbm7b5", "Cbmaj7", "Dbm7", "Ebm7", "Fbmaj7", "Gb7"];
        }
        else if (keyValue === "B" && signatureValue === "Flat" && majminValue === "Minor") {
            notes = ["Bbm7", "Cm7b5", "Dbmaj7", "Ebm7", "Fm7", "Gbmaj7", "Ab7"];
        }


        ChordInKey.innerHTML = formatChords(numbers, notes);
        }
    );

    document.getElementById("key").addEventListener("change", function() {
        document.getElementById("scale_in_key").innerHTML = "";
        document.getElementById("chord_in_key").innerHTML = "";
    });
    document.getElementById("signature").addEventListener("change", function() {
        document.getElementById("scale_in_key").innerHTML = "";
        document.getElementById("chord_in_key").innerHTML = "";
    });
    document.getElementById("majmin").addEventListener("change", function() {
        document.getElementById("scale_in_key").innerHTML = "";
        document.getElementById("chord_in_key").innerHTML = "";
    });



}



