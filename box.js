window.onload = function() {
    // Key
    const key = document.getElementById("key");
    const signature = document.getElementById("signature");
    const majmin = document.getElementById("majmin");
    const submitBtn = document.getElementById("submit_btn");
    const scaleInKey = document.getElementById("scale_in_key");
    const submitMode = document.getElementById("submit_mode");
    const ModeInKey = document.getElementById("mode_in_key");
    let numbers = ["I&nbsp&nbsp&nbsp", "II&nbsp&nbsp", "III&nbsp", "IV&nbsp ", "V&nbsp&nbsp", "VI&nbsp ", "VII"];
    let notes = [];

    // Chord
    const key_ = document.getElementById("key-");
    const signature_ = document.getElementById("signature-");
    const Chord = document.getElementById("Chord");
    const chord_select = document.getElementById("chord-select");
    const submitChord = document.getElementById("submit_chord");
    const ChordInKey = document.getElementById("chord-index");



    // Original note: Alternated note notation
    const note_map = {
        "C#": "Cs",
        "D#": "Ds",
        "E#": "F",
        "F#": "Fs",
        "G#": "Gs",
        "A#": "As",
        "B#": "C",

        "C##": "D",
        "D##": "E",
        "E##": "Fs",
        "F##": "G",
        "G##": "A",
        "A##": "B",
        "B##": "Cs",

        "C###": "Ds",
        "D###": "F",
        "E###": "G",
        "F###": "Gs",
        "G###": "As",
        "A###": "C",
        "B###": "D",

        "Cb": "B",
        "Db": "Cs",
        "Eb": "Ds",
        "Fb": "E",
        "Gb": "Fs",
        "Ab": "Gs",
        "Bb": "As",

        "Cbb": "As",
        "Dbb": "C",
        "Ebb": "D",
        "Fbb": "Ds",
        "Gbb": "F",
        "Abb": "G",
        "Bbb": "A",

        "Cbbb": "A",
        "Dbbb": "B",
        "Ebbb": "Cs",
        "Fbbb": "D",
        "Gbbb": "E",
        "Abbb": "Fs",
        "Bbbb": "Gs",

    };


    ///////////////// Key ///////////////////
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



    // index-part: when click Scale button, Play button shows
    document.getElementById("submit_btn").addEventListener("click", function() {
        document.getElementById("play_scale").style.display = "block";
    });
    document.getElementById("play_scale").style.display = "none";

    // index-part: when click Mode button, Play button shows
    document.getElementById("submit_mode").addEventListener("click", function() {
        document.getElementById("play_mode").style.display = "block";
    });
    document.getElementById("play_mode").style.display = "none";



    // key - play audio
   function playScale() {
        const scale_notes = scaleInKey.innerHTML.split(" ");
        console.log(scale_notes);

       const modified_scale_notes = scale_notes.map(note => note_map[note] || note);
       modified_scale_notes.push(modified_scale_notes[0]);
       console.log(modified_scale_notes);


       let octave = [];
       let firstNote = modified_scale_notes[0];
       if  (modified_scale_notes[0] === "Cs"&&
           modified_scale_notes[1] === "Ds"&&
           modified_scale_notes[2] === "F"&&
           modified_scale_notes[3] === "Fs"&&
           modified_scale_notes[4] === "Gs"&&
           modified_scale_notes[5] === "As"&&
           modified_scale_notes[6] === "C"
       ) {
           octave = [4, 4, 4, 4, 4, 4, 5, 5];
       } else if  (modified_scale_notes[0] === "Ds"&&
           modified_scale_notes[1] === "F"&&
           modified_scale_notes[2] === "G"&&
           modified_scale_notes[3] === "Gs"&&
           modified_scale_notes[4] === "As"&&
           modified_scale_notes[5] === "C"&&
           modified_scale_notes[6] === "D"
       ) {
               octave = [4, 4, 4, 4, 4, 5, 5, 5];
       } else if  (modified_scale_notes[0] === "Gs"&&
           modified_scale_notes[1] === "As"&&
           modified_scale_notes[2] === "C"&&
           modified_scale_notes[3] === "Cs"&&
           modified_scale_notes[4] === "Ds"&&
           modified_scale_notes[5] === "F"&&
           modified_scale_notes[6] === "G"
       ) {
           octave = [4, 4, 5, 5, 5, 5, 5, 5];
       } else if  (modified_scale_notes[0] === "As"&&
           modified_scale_notes[1] === "C"&&
           modified_scale_notes[2] === "D"&&
           modified_scale_notes[3] === "Ds"&&
           modified_scale_notes[4] === "F"&&
           modified_scale_notes[5] === "G"&&
           modified_scale_notes[6] === "A"
       ) {
           octave = [4, 5, 5, 5, 5, 5, 5, 5];
       } else if  (modified_scale_notes[0] === "As"&&
           modified_scale_notes[1] === "C"&&
           modified_scale_notes[2] === "Cs"&&
           modified_scale_notes[3] === "Ds"&&
           modified_scale_notes[4] === "F"&&
           modified_scale_notes[5] === "Fs"&&
           modified_scale_notes[6] === "Gs"
       ) {
           octave = [4, 5, 5, 5, 5, 5, 5, 5];
       } else if (firstNote === "C"|| firstNote === "Cs") {
           octave = [4, 4, 4, 4, 4, 4, 4, 5];
       } else if (firstNote === "D"|| firstNote === "Ds") {
           octave = [4, 4, 4, 4, 4, 4, 5, 5];
       } else if (firstNote === "E"|| firstNote === "Es") {
           octave = [4, 4, 4, 4, 4, 5, 5, 5];
       } else if (firstNote === "F"|| firstNote === "Fs") {
           octave = [4, 4, 4, 4, 5, 5, 5, 5];
       } else if (firstNote === "G"|| firstNote === "Gs") {
           octave = [4, 4, 4, 5, 5, 5, 5, 5];
       } else if (firstNote === "A"|| firstNote === "As") {
           octave = [4, 4, 5, 5, 5, 5, 5, 5];
       } else if (firstNote === "B"|| firstNote === "Bs") {
           octave = [4, 5, 5, 5, 5, 5, 5, 5];
       }


       for (let i = 0; i < modified_scale_notes.length; i++) {
           setTimeout(() => {
               // play audio
               playNote(`${modified_scale_notes[i]}${octave[i]}`);
               // change key color
               document.querySelectorAll(`[note='${modified_scale_notes[i]}${octave[i]}']`).forEach(function(element) {
                   if (element.classList.contains("key-white")) {
                       element.style.backgroundColor = "rgb(187,229,166)";
                   } else if (element.classList.contains("key-black")) {
                       element.style.backgroundColor = "rgb(10,101,22)";
                   }
               });
           }, 400 * i);

           }

       setTimeout(function() {
           document.querySelectorAll(".key-white").forEach(function(element) {
               element.style.backgroundColor = "white";
           });

           document.querySelectorAll(".key-black").forEach(function(element) {
               element.style.backgroundColor = "black";
           });
       }, 4500);


   }




    // 同时播放-适用于和弦
    // function playScale() {
    //         const scale_notes = scaleInKey.innerHTML.split(" ");
    //         scale_notes.forEach((note) => {
    //             playNote(`${note}4`);
    //         });

    document.getElementById("play_scale").addEventListener("click", playScale);




  // mode
    function formatModes(numbers, notes) {
        let modes = "";
        for (let i = 0; i < notes.length; i++) {
            modes += numbers[i] + " &nbsp "+ notes[i] + "<br>";
        }
        return modes;
    }

    submitMode.addEventListener("click", function () {
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


        ModeInKey.innerHTML = formatModes(numbers, notes);
        }
    );

    // update part


    document.getElementById("key").addEventListener("change", function() {
        document.getElementById("scale_in_key").innerHTML = "";
        document.getElementById("mode_in_key").innerHTML = "";
        document.getElementById("play_scale").style.display = "none";
        document.querySelectorAll(".key-white").forEach(function(element) {
            element.style.backgroundColor = "white";
        });

        document.querySelectorAll(".key-black").forEach(function(element) {
            element.style.backgroundColor = "black";
        });


    });
    document.getElementById("signature").addEventListener("change", function() {
        document.getElementById("scale_in_key").innerHTML = "";
        document.getElementById("mode_in_key").innerHTML = "";
        document.getElementById("play_scale").style.display = "none";
        // key color reset
        document.querySelectorAll(".key-white").forEach(function(element) {
            element.style.backgroundColor = "white";
        });

        document.querySelectorAll(".key-black").forEach(function(element) {
            element.style.backgroundColor = "black";
        });

    });
    document.getElementById("majmin").addEventListener("change", function() {
        document.getElementById("scale_in_key").innerHTML = "";
        document.getElementById("mode_in_key").innerHTML = "";
        document.getElementById("play_scale").style.display = "none";
        // key color reset
        document.querySelectorAll(".key-white").forEach(function(element) {
            element.style.backgroundColor = "white";
        });

        document.querySelectorAll(".key-black").forEach(function(element) {
            element.style.backgroundColor = "black";
        });

    });




    /////////////////// Chord /////////////////////
    // select part
    document.getElementById("Chord").addEventListener("change", function () {
        const chordSelect = document.getElementById("chord-select");
        switch (this.value) {
            case "Triads":
                chordSelect.style.display = "inline-block";
                chordSelect.innerHTML = "<option value='Major 3rd'>Major 3rd</option> " +
                    "<option value='Minor 3rd'>Minor 3rd</option>"+
                    "<option value='Diminished 3rd'>Diminished 3rd</option>"+
                    "<option value='Augmented 3rd'>Augmented 3rd</option>";
                break;
            case "Tetrads":
                chordSelect.style.display = "inline-block";
                chordSelect.innerHTML = "<option value='Major 7th'>Major 7th</option> " +
                    "<option value='Minor 7th'>Minor 7th</option>"+
                    "<option value='Dominant 7th'>Dominant 7th</option>"+
                    "<option value='Diminished 7th'>Diminished 7th</option>"+
                    "<option value='Half Diminished 7th'>Half Diminished 7th</option>"+
                    "<option value='Augmented 7th'>Augmented 7th</option>"+
                    "<option value='Augmented Major 7th'>Augmented Major 7th</option>";
                break;
            default:
                chordSelect.style.display = "none";
        }
    });

    // index part

    submitChord.addEventListener("click", function () {
            const key_Value = key_.value;
            const signature_Value = signature_.value;
            const ChordValue = Chord.value;
            const chords_electValue = chord_select.value;

            if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "C E G";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "D F# A";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "E G# B";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                    ChordInKey.innerHTML = "F A C";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "G B D";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                        ChordInKey.innerHTML = "A C# E";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "B D# F#";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "C# E# G#";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "D# F## A#";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "E# G## B#";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "F# A# C#";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "G# B# D#";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "A# C## E#";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "B# D## F##";

            } else if (key_Value === "C" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "Cb Eb Gb";
            } else if (key_Value === "D" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "Db F Ab";
            } else if (key_Value === "E" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "Eb G Bb";
            } else if (key_Value === "F" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "Fb Ab Cb";
            } else if (key_Value === "G" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "Gb Bb Db";
            } else if (key_Value === "A" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "Ab C Eb";
            } else if (key_Value === "B" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Major 3rd") {
                ChordInKey.innerHTML = "Bb D F";


            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                    ChordInKey.innerHTML = "C Eb G";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "D F A";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "E G B";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "F Ab C";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "G Bb D";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "A C E";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "B D F#";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "C# E G#";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "D# F# A#";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "E# G# B#";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "F# A C#";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "G# B D#";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "A# C# E#";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "B# D# F##";


            } else if (key_Value === "C" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "Cb Ebb Gb";
            } else if (key_Value === "D" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "Db Fb Ab";
            } else if (key_Value === "E" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "Eb Gb Bb";
            } else if (key_Value === "F" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "Fb Abb Cb";
            } else if (key_Value === "G" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "Gb Bbb Db";
            } else if (key_Value === "A" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "Ab Cb Eb";
            } else if (key_Value === "B" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Minor 3rd") {
                ChordInKey.innerHTML = "Bb Db F";

            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "C Eb Gb";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "D F Ab";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "E G Bb";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "F Ab Cb";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "G Bb Db";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "A C Eb";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "B D F";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "C# E G";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "D# F# A";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "E# G# B";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "F# A C";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "G# B D";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "A# C# E";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "B# D# F#";

            } else if (key_Value === "C" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "Cb Ebb Gbb";
            } else if (key_Value === "D" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "Db Fb Abb";
            } else if (key_Value === "E" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "Eb Gb Bbb";
            } else if (key_Value === "F" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "Fb Abb Cbb";
            } else if (key_Value === "G" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "Gb Bbb Dbb";
            } else if (key_Value === "A" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "Ab Cb Ebb";
            } else if (key_Value === "B" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Diminished 3rd") {
                ChordInKey.innerHTML = "Bb Db Fb";

            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                    ChordInKey.innerHTML = "C E G#";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "D F# A#";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "E G# B#";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "F A C#";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "G B D#";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "A C# E#";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "B D# F##";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "C# E# G##";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "D# F## A##";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "E# G## B##";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "F# A# C##";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "G# B# D##";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "A# C## E##";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "B# D## F###";

            } else if (key_Value === "C" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "Cb Eb G";
            } else if (key_Value === "D" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "Db F A";
            } else if (key_Value === "E" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "Eb G B";
            } else if (key_Value === "F" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "Fb Ab C";
            } else if (key_Value === "G" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "Gb Bb D";
            } else if (key_Value === "A" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "Ab C E";
            } else if (key_Value === "B" && signature_Value === "Flat" && ChordValue === "Triads" && chords_electValue ==="Augmented 3rd") {
                ChordInKey.innerHTML = "Bb D F#";


            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "C E G B";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "D F# A C#";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "E G# B D#";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "F A C E";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "G B D F#";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "A C# E G#";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "B D# F# A#";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "C# E# G# B#";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "D# F## A# C##";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "E# G## B# D##";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "F# A# C# E#";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "G# B# D# F##";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "A# C## E# G##";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "B# D## F## A##";

            } else if (key_Value === "C" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "Cb Eb Gb Bb";
            } else if (key_Value === "D" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "Db F Ab C";
            } else if (key_Value === "E" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "Eb G Bb D";
            } else if (key_Value === "F" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "Fb Ab Cb Eb";
            } else if (key_Value === "G" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "Gb Bb Db F";
            } else if (key_Value === "A" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "Ab C Eb G";
            } else if (key_Value === "B" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Major 7th") {
                ChordInKey.innerHTML = "Bb D F A";

            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "C Eb G Bb";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "D F A C";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "E G B D";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "F Ab C Eb";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "G Bb D F";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "A C E G";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "B D F# A";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "C# E G# B";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "D# F# A# C#";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "E# G# B# D#";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "F# A C# E";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "G# B D# F#";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "A# C# E# G#";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "B# D# F## A#";

            } else if (key_Value === "C" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "Cb Ebb Gb Bbb";
            } else if (key_Value === "D" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "Db Fb Ab Cb";
            } else if (key_Value === "E" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "Eb Gb Bb Db";
            } else if (key_Value === "F" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "Fb Abb Cb Ebb";
            } else if (key_Value === "G" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "Gb Bbb Db Fb";
            } else if (key_Value === "A" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "Ab Cb Eb Gb";
            } else if (key_Value === "B" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Minor 7th") {
                ChordInKey.innerHTML = "Bb Db F Ab";

            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "C E G Bb";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "D F# A C";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "E G# B D";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "F A C Eb";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "G B D F";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "A C# E G";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "B D# F# A";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "C# E# G# B";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "D# F## A# C#";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "E# G## B# D#";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "F# A# C# E";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "G# B# D# F#";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "A# C## E# G#";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "B# D## F## A#";

            } else if (key_Value === "C" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "Cb Eb Gb Bbb";
            } else if (key_Value === "D" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "Db F Ab Cb";
            } else if (key_Value === "E" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "Eb G Bb Db";
            } else if (key_Value === "F" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "Fb Ab Cb Ebb";
            } else if (key_Value === "G" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "Gb Bb Db Fb";
            } else if (key_Value === "A" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "Ab C Eb Gb";
            } else if (key_Value === "B" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Dominant 7th") {
                ChordInKey.innerHTML = "Bb D F Ab";

            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "C Eb Gb Bbb";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "D F Ab Cb";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "E G Bb Db";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "F Ab Cb Ebb";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "G Bb Db Fb";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "A C Eb Gb";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "B D F Ab";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "C# E G Bb";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "D# F# A C";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "E# G# B D";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "F# A C Eb";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "G# B D F";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "A# C# E G";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "B# D# F# A";

            } else if (key_Value === "C" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "Cb Ebb Gbb Bbbb";
            } else if (key_Value === "D" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "Db Fb Abb Cbb";
            } else if (key_Value === "E" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "Eb Gb Bbb Dbb";
            } else if (key_Value === "F" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "Fb Abb Cbb Ebbb";
            } else if (key_Value === "G" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "Gb Bbb Dbb Fbb";
            } else if (key_Value === "A" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "Ab Cb Ebb Gbb";
            } else if (key_Value === "B" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Diminished 7th") {
                ChordInKey.innerHTML = "Bb Db Fb Abb";

            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "C Eb Gb Bb";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "D F Ab C";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "E G Bb D";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "F Ab Cb Eb";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "G Bb Db F";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "A C Eb G";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "B D F A";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "C# E G B";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished7th") {
                ChordInKey.innerHTML = "D# F# A C#";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "E# G# B D#";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "F# A C E";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "G# B D F#";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "A# C# E G#";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "B# D# F# A#";

            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "Cb Ebb Gbb Bbb";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished7th") {
                ChordInKey.innerHTML = "Db Fb Abb Cb";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "Eb Gb Bbb Db";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "Fb Abb Cbb Ebb";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "Gb Bbb Dbb Fb";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "Ab Cb Ebb Gb";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Half Diminished 7th") {
                ChordInKey.innerHTML = "Bb Db Fb Ab";

            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "C E G# Bb";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "D F# A# C";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "E G# B# D";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "F A C# Eb";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "G B D# F";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "A C# E# G";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "B D# F## A";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "C# E# G## B";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "D# F## A## C#";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "E# G## B## D#";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "F# A# C## E";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "G# B# D## F#";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "A# C## E## G#";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "B# D## F### A#";

            } else if (key_Value === "C" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "Cb Eb G Bbb";
            } else if (key_Value === "D" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "Db F A Cb";
            } else if (key_Value === "E" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "Eb G B Db";
            } else if (key_Value === "F" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "Fb Ab C Ebb";
            } else if (key_Value === "G" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "Gb Bb D Fb";
            } else if (key_Value === "A" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "Ab C E Gb";
            } else if (key_Value === "B" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented 7th") {
                ChordInKey.innerHTML = "Bb D F# Ab";

            } else if (key_Value === "C" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "C E G# B";
            } else if (key_Value === "D" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "D F# A# C#";
            } else if (key_Value === "E" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "E G# B# D#";
            } else if (key_Value === "F" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "F A C# E";
            } else if (key_Value === "G" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "G B D# F#";
            } else if (key_Value === "A" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "A C# E# G#";
            } else if (key_Value === "B" && signature_Value === "Natural" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "B D# F## A#";

            } else if (key_Value === "C" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "C# E# G## B#";
            } else if (key_Value === "D" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "D# F## A## C##";
            } else if (key_Value === "E" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "E# G## B## D##";
            } else if (key_Value === "F" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "F# A# C## E#";
            } else if (key_Value === "G" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "G# B# D## F##";
            } else if (key_Value === "A" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "A# C## E## G##";
            } else if (key_Value === "B" && signature_Value === "Sharp" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "B# D## F### A##";

            } else if (key_Value === "C" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "Cb Eb G Bb";
            } else if (key_Value === "D" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "Db F A C";
            } else if (key_Value === "E" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "Eb G B D";
            } else if (key_Value === "F" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "Fb Ab C Eb";
            } else if (key_Value === "G" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "Gb Bb D F";
            } else if (key_Value === "A" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "Ab C E G";
            } else if (key_Value === "B" && signature_Value === "Flat" && ChordValue === "Tetrads" && chords_electValue ==="Augmented Major 7th") {
                ChordInKey.innerHTML = "Bb D F# A";
            }

        }
    );

    // index-part: when click Chord button, Play button shows
    document.getElementById("submit_chord").addEventListener("click", function() {
        document.getElementById("play_chord").style.display = "block";
    });
    document.getElementById("play_chord").style.display = "none";



////////DOING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    function playChord() {
        const reference = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'];
        const chord_notes = ChordInKey.innerHTML.split(" ");
        console.log(chord_notes);

        const modified_chord_notes = chord_notes.map(note => note_map[note] || note);
        console.log(modified_chord_notes);

        const octave_chord = [4];


        for (let i = 1; i < modified_chord_notes.length; i++) {
            const note = modified_chord_notes[i];
            const index = reference.indexOf(note);
            if (index < reference.indexOf(modified_chord_notes[0])) {
                octave_chord[i] = 5;
            } else {
                octave_chord[i] = 4;
            }

        }
        console.log(octave_chord);

        for (let i = 0; i < modified_chord_notes.length; i++) {
            setTimeout(() => {
                // play audio
                playNote(`${modified_chord_notes[i]}${octave_chord[i]}`);
                // change key color
                document.querySelectorAll(`[note='${modified_chord_notes[i]}${octave_chord[i]}']`).forEach(function (element) {
                    if (element.classList.contains("key-white")) {
                        element.style.backgroundColor = "rgb(187,229,166)";
                    } else if (element.classList.contains("key-black")) {
                        element.style.backgroundColor = "rgb(10,101,22)";
                    }
                });
            }, 0);
        }

        setTimeout(function() {
            document.querySelectorAll(".key-white").forEach(function(element) {
                element.style.backgroundColor = "white";
            });

            document.querySelectorAll(".key-black").forEach(function(element) {
                element.style.backgroundColor = "black";
            });
        }, 2000);
    }





    document.getElementById("play_chord").addEventListener("click", playChord);





    // update part
    document.getElementById("key-").addEventListener("change", function() {
        document.getElementById("chord-index").innerHTML = "";
        document.getElementById("play_chord").style.display = "none";
        // key color reset
        document.querySelectorAll(".key-white").forEach(function(element) {
            element.style.backgroundColor = "white";
        });

        document.querySelectorAll(".key-black").forEach(function(element) {
            element.style.backgroundColor = "black";
        });

    });
    document.getElementById("signature-").addEventListener("change", function() {
        document.getElementById("chord-index").innerHTML = "";
        document.getElementById("play_chord").style.display = "none";
        // key color reset
        document.querySelectorAll(".key-white").forEach(function(element) {
            element.style.backgroundColor = "white";
        });

        document.querySelectorAll(".key-black").forEach(function(element) {
            element.style.backgroundColor = "black";
        });
    });
    document.getElementById("Chord").addEventListener("change", function() {
        document.getElementById("chord-index").innerHTML = "";
        document.getElementById("play_chord").style.display = "none";
        // key color reset
        document.querySelectorAll(".key-white").forEach(function(element) {
            element.style.backgroundColor = "white";
        });

        document.querySelectorAll(".key-black").forEach(function(element) {
            element.style.backgroundColor = "black";
        });
    });
    document.getElementById("chord-select").addEventListener("change", function() {
        document.getElementById("chord-index").innerHTML = "";
        document.getElementById("play_chord").style.display = "none";
        // key color reset
        document.querySelectorAll(".key-white").forEach(function(element) {
            element.style.backgroundColor = "white";
        });

        document.querySelectorAll(".key-black").forEach(function(element) {
            element.style.backgroundColor = "black";
        });
    });




}

// piano

function playNote(note) {
    const audioElement = document.createElement("audio");
    audioElement.src = `PianoAudio/${note}.mp3`;
    audioElement.play().then(() => {
        console.log(`${note}.mp3 is playing`);
    }).catch((error) => {
        console.error(`Error playing ${note}.mp3: ${error}`);
    });
}



