<html lang="en">

<head>
    <meta charSet="utf-8">
        <link rel="icon" href="/chords/favicon.ico">
            <meta name="viewport" content="width=device-width,initial-scale=1">
                <meta name="theme-color" content="#000000">
                    <meta name="description" content="Piano Chords Finder">
                        <link rel="apple-touch-icon" href="/chords/favicon196.png">
                            <link rel="manifest" href="/chords/manifest.json">
                                <title>Piano Chords</title>
                                <link href="/chords/static/css/main.7891e38e.chunk.css" rel="stylesheet">
</head>

<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root">
    <div className="nav">
        <div className="nav-center">
            <div className="nav-left">
                <h2>Piano Chords</h2>
            </div>
            <div className="nav-right">
                <div className="button-group">
                    <button className="show-shortcuts">Keyboard Shortcuts</button>
                    <button>About</button>
                </div>
            </div>
        </div>
    </div>
    <div className="layout">
        <div className="layout-center">
            <div className="piano theme-notes theme-locked">
                <div className="piano-buttons">
                    <button className="small-on-mobile theme-locked">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                             xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M17 8.5H18C19.1 8.5 20 9.4 20 10.5V20.5C20 21.6 19.1 22.5 18 22.5H6C4.9 22.5 4 21.6 4 20.5V10.5C4 9.4 4.9 8.5 6 8.5H7V6.5C7 3.74 9.24 1.5 12 1.5C14.76 1.5 17 3.74 17 6.5V8.5ZM9 6.5V8.5H15V6.5C15 4.84 13.66 3.5 12 3.5C10.34 3.5 9 4.84 9 6.5Z"
                                      fill="black">
                                </path>
                            </g>
                        </svg>
                        <span className="text">Lock</span>
                    </button>
                    <div className="piano-volume">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon sharp "
                                 xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M14 4.65181V4.45181C14 3.82181 14.63 3.37181 15.21 3.60181C18.6 4.89181 21 8.16181 21 12.0018C21 15.8418 18.6 19.1118 15.21 20.4018C14.63 20.6218 14 20.1818 14 19.5518V19.3518C14 18.9718 14.24 18.6418 14.6 18.5018C17.18 17.4718 19 14.9418 19 12.0018C19 9.06181 17.18 6.53181 14.6 5.50181C14.25 5.36181 14 5.03181 14 4.65181ZM3 10.0018V14.0018C3 14.5518 3.45 15.0018 4 15.0018H7L10.29 18.2918C10.92 18.9218 12 18.4718 12 17.5818V6.41181C12 5.52181 10.92 5.07181 10.29 5.70181L7 9.00181H4C3.45 9.00181 3 9.45181 3 10.0018ZM16.5 12.0018C16.5 10.2318 15.48 8.71181 14 7.97181V16.0218C15.48 15.2918 16.5 13.7718 16.5 12.0018Z"
                                          fill="black">
                                    </path>
                                </g>
                            </svg>
                        </button>
                        <input type="range" min="-20" max="0" className="piano-volume-slider" value="-4">
                    </div>
                    <div className="button-group touching">
                        <button className="play small-on-mobile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                                 xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.1C10.47 7.85 10 8.09 10 8.5V15.5C10 15.91 10.47 16.15 10.8 15.9ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"
                                          fill="black">
                                    </path>
                                </g>
                            </svg>
                            <span className="text">Play as Scale</span>
                        </button>
                        <button className="play small-on-mobile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                                 xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM10.8 8.1C10.47 7.85 10 8.09 10 8.5V15.5C10 15.91 10.47 16.15 10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.1Z"
                                          fill="black">
                                    </path>
                                </g>
                            </svg>
                            <span className="text">Play as Chord</span>
                        </button>
                        <button className="small-on-mobile" disabled>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                                 xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M2 12C2 6.47 6.47 2 12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12ZM14.89 16.3C15.28 16.69 15.91 16.69 16.3 16.3C16.68 15.91 16.68 15.27 16.3 14.89L13.41 12L16.3 9.11C16.69 8.72 16.69 8.09 16.3 7.7C15.91 7.31 15.28 7.31 14.89 7.7L12 10.59L9.11 7.7C8.72 7.31 8.09 7.31 7.7 7.7C7.51275 7.88683 7.40751 8.14048 7.40751 8.405C7.40751 8.66952 7.51275 8.92317 7.7 9.11L10.59 12L7.7 14.89C7.51275 15.0768 7.40751 15.3305 7.40751 15.595C7.40751 15.8595 7.51275 16.1132 7.7 16.3C8.09 16.69 8.72 16.69 9.11 16.3L12 13.41L14.89 16.3Z"
                                          fill="black">
                                    </path>
                                </g>
                            </svg>
                            <span className="text">Clear</span>
                        </button>
                    </div>
                </div>
                <div className="piano-shortcuts">
                </div>
                <div className="piano-keys-wrap">
                    <div className="piano-keys">
                        <button className="key key-white active" data-midi="53" data-note="F3">
                <span className="key-labels">
                  <span className="key-label active">F</span>
                  <span className="key-label sharp">E#</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="54" data-note="F#3">
                <span className="key-labels">
                  <span className="key-label sharp">F#</span>
                  <span className="key-label flat">Gb</span>
                </span>
                        </button>
                        <button className="key key-white active" data-midi="55" data-note="G3">
                <span className="key-labels">
                  <span className="key-label active">G</span>
                </span>
                        </button>
                        <button className="key key-black active" data-midi="56" data-note="G#3" data-shortcut="q">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">q</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label sharp">G#</span>
                  <span className="key-label active flat">Ab</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="57" data-note="A3" data-shortcut="a">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">a</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label">A</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="58" data-note="A#3" data-shortcut="w">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">w</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label sharp">A#</span>
                  <span className="key-label flat">Bb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="59" data-note="B3" data-shortcut="s">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">s</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label">B</span>
                  <span className="key-label flat">Cb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="60" data-note="C4" data-shortcut="d">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">d</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label">C</span>
                  <span className="key-label sharp">B#</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="61" data-note="C#4" data-shortcut="r">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">r</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label sharp">C#</span>
                  <span className="key-label flat">Db</span>
                </span>
                        </button>
                        <button className="key key-white active" data-midi="62" data-note="D4" data-shortcut="f">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">f</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label active">D</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="63" data-note="D#4" data-shortcut="t">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">t</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label sharp">D#</span>
                  <span className="key-label flat">Eb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="64" data-note="E4" data-shortcut="g">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">g</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label">E</span>
                  <span className="key-label flat">Fb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="65" data-note="F4" data-shortcut="h">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">h</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label">F</span>
                  <span className="key-label sharp">E#</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="66" data-note="F#4" data-shortcut="u">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">u</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label sharp">F#</span>
                  <span className="key-label flat">Gb</span>
                </span>
                        </button>
                        <button className="key key-white active" data-midi="67" data-note="G4" data-shortcut="j">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">j</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label active">G</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="68" data-note="G#4" data-shortcut="i">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">i</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label sharp">G#</span>
                  <span className="key-label flat">Ab</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="69" data-note="A4" data-shortcut="k">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">k</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label">A</span>
                </span>
                        </button>
                        <button className="key key-black active" data-midi="70" data-note="A#4" data-shortcut="o">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">o</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label sharp">A#</span>
                  <span className="key-label active flat">Bb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="71" data-note="B4" data-shortcut="l">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">l</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label">B</span>
                  <span className="key-label flat">Cb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="72" data-note="C5" data-shortcut=";">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">;</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label">C</span>
                  <span className="key-label sharp">B#</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="73" data-note="C#5" data-shortcut="[">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">[</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label sharp">C#</span>
                  <span className="key-label flat">Db</span>
                </span>
                        </button>
                        <button className="key key-white active" data-midi="74" data-note="D5" data-shortcut="'">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">'</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label active">D</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="75" data-note="D#5" data-shortcut="]">
                            <div className="key-shortcut">
                  <span className="key-shortcut-line">
                  </span>
                                <span className="key-shortcut-btn">]</span>
                            </div>
                            <span className="key-labels">
                  <span className="key-label sharp">D#</span>
                  <span className="key-label flat">Eb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="76" data-note="E5">
                <span className="key-labels">
                  <span className="key-label">E</span>
                  <span className="key-label flat">Fb</span>
                </span>
                        </button>
                        <button className="key key-white active" data-midi="77" data-note="F5">
                <span className="key-labels">
                  <span className="key-label active">F</span>
                  <span className="key-label sharp">E#</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="78" data-note="F#5">
                <span className="key-labels">
                  <span className="key-label sharp">F#</span>
                  <span className="key-label flat">Gb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="79" data-note="G5">
                <span className="key-labels">
                  <span className="key-label">G</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="80" data-note="G#5">
                <span className="key-labels">
                  <span className="key-label sharp">G#</span>
                  <span className="key-label flat">Ab</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="81" data-note="A5">
                <span className="key-labels">
                  <span className="key-label">A</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="82" data-note="A#5">
                <span className="key-labels">
                  <span className="key-label sharp">A#</span>
                  <span className="key-label flat">Bb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="83" data-note="B5">
                <span className="key-labels">
                  <span className="key-label">B</span>
                  <span className="key-label flat">Cb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="84" data-note="C6">
                <span className="key-labels">
                  <span className="key-label">C</span>
                  <span className="key-label sharp">B#</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="85" data-note="C#6">
                <span className="key-labels">
                  <span className="key-label sharp">C#</span>
                  <span className="key-label flat">Db</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="86" data-note="D6">
                <span className="key-labels">
                  <span className="key-label">D</span>
                </span>
                        </button>
                        <button className="key key-black" data-midi="87" data-note="D#6">
                <span className="key-labels">
                  <span className="key-label sharp">D#</span>
                  <span className="key-label flat">Eb</span>
                </span>
                        </button>
                        <button className="key key-white" data-midi="88" data-note="E6">
                <span className="key-labels">
                  <span className="key-label">E</span>
                  <span className="key-label flat">Fb</span>
                </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="layout-bottom">
                <div className="layout-bottom-left">
                    <div className="box box-wheel opened">
                        <div className="box-header" role="button">
                            <div className="box-header-inner">
                                <span className="box-header-title">Circle of Fifths</span>
                            </div>
                            <span className="box-header-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                       xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                          d="M8.70621 11.4138L11.2962 14.0038C11.6862 14.3938 12.3162 14.3938 12.7062 14.0038L15.2962 11.4138C15.9262 10.7838 15.4762 9.70375 14.5862 9.70375H9.40621C8.51621 9.70375 8.07621 10.7838 8.70621 11.4138Z"
                          fill="black">
                      </path>
                    </g>
                  </svg>
                </span>
                        </div>
                        <div className="box-body">
                            <div className="wheel-wrap">
                                <div className="wheel theme-notes">
                                    <svg className="arc-sections" width="402" height="402" viewBox="0 0 402 402"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path className="outer outer-0 type-none"
                                                  d="M252.764 7.81486C218.853 -1.2716 183.147 -1.27162 149.236 7.81481L167.354 75.4296C189.396 69.5234 212.604 69.5235 234.647 75.4297L252.764 7.81486Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-1 type-major in-key"
                                                  d="M342.421 59.5785C317.597 34.7539 286.675 16.9012 252.764 7.8147L234.646 75.4295C256.689 81.3357 276.788 92.94 292.924 109.076L342.421 59.5785Z">
                                            </path>
                                            <path className="inner inner-1 type-major"
                                                  d="M292.924 109.076C276.788 92.9399 256.689 81.3356 234.646 75.4294L222.87 119.379C237.198 123.218 250.262 130.761 260.75 141.249L292.924 109.076Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-2 type-major current in-key"
                                                  d="M394.185 149.236C385.099 115.325 367.246 84.4033 342.421 59.5786L292.924 109.076C309.06 125.212 320.664 145.311 326.57 167.353L394.185 149.236Z">
                                            </path>
                                            <path className="inner inner-2 type-major"
                                                  d="M326.57 167.353C320.664 145.311 309.06 125.212 292.924 109.076L260.75 141.249C271.239 151.738 278.782 164.802 282.621 179.13L326.57 167.353Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-3 type-major in-key"
                                                  d="M394.185 252.764C403.272 218.853 403.272 183.147 394.185 149.236L326.57 167.354C332.477 189.396 332.477 212.604 326.57 234.647L394.185 252.764Z">
                                            </path>
                                            <path className="inner inner-3 type-major"
                                                  d="M326.57 234.646C332.476 212.604 332.476 189.396 326.57 167.354L282.621 179.13C286.46 193.457 286.46 208.543 282.621 222.87L326.57 234.646Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-4 type-minor in-key"
                                                  d="M342.421 342.421C367.246 317.597 385.099 286.675 394.185 252.764L326.57 234.646C320.664 256.689 309.06 276.788 292.924 292.924L342.421 342.421Z">
                                            </path>
                                            <path className="inner inner-4 type-minor"
                                                  d="M292.924 292.924C309.06 276.788 320.664 256.689 326.57 234.646L282.621 222.87C278.782 237.198 271.239 250.262 260.75 260.75L292.924 292.924Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-5 type-minor in-key"
                                                  d="M252.764 394.185C286.675 385.099 317.596 367.246 342.421 342.421L292.924 292.924C276.788 309.06 256.688 320.664 234.646 326.57L252.764 394.185Z">
                                            </path>
                                            <path className="inner inner-5 type-minor"
                                                  d="M234.646 326.57C256.689 320.664 276.788 309.06 292.924 292.924L260.75 260.75C250.262 271.239 237.198 278.782 222.87 282.621L234.646 326.57Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-6 type-minor in-key"
                                                  d="M149.236 394.185C183.147 403.272 218.853 403.272 252.764 394.185L234.646 326.57C212.604 332.477 189.396 332.477 167.353 326.57L149.236 394.185Z">
                                            </path>
                                            <path className="inner inner-6 type-minor"
                                                  d="M167.353 326.57C189.395 332.476 212.604 332.476 234.646 326.57L222.87 282.621C208.543 286.46 193.457 286.46 179.13 282.621L167.353 326.57Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-7 type-diminished in-key"
                                                  d="M59.5786 342.421C84.4032 367.246 115.325 385.098 149.236 394.185L167.353 326.57C145.311 320.664 125.212 309.06 109.076 292.924L59.5786 342.421Z">
                                            </path>
                                            <path className="inner inner-7 type-diminished current"
                                                  d="M109.076 292.924C125.212 309.06 145.311 320.664 167.353 326.57L179.13 282.62C164.802 278.781 151.738 271.239 141.249 260.75L109.076 292.924Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-8 type-none"
                                                  d="M7.8147 252.764C16.9011 286.675 34.7538 317.596 59.5785 342.421L109.076 292.924C92.94 276.788 81.3357 256.688 75.4295 234.646L7.8147 252.764Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-9 type-none"
                                                  d="M7.81486 149.236C-1.2716 183.147 -1.27162 218.853 7.81481 252.764L75.4296 234.646C69.5234 212.604 69.5235 189.396 75.4297 167.353L7.81486 149.236Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-10 type-none"
                                                  d="M59.5788 59.5786C34.7541 84.4032 16.9014 115.325 7.81494 149.236L75.4297 167.353C81.3359 145.311 92.9402 125.212 109.076 109.076L59.5788 59.5786Z">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="outer outer-11 type-none"
                                                  d="M149.236 7.8147C115.325 16.9011 84.4033 34.7538 59.5786 59.5785L109.076 109.076C125.212 92.94 145.311 81.3357 167.353 75.4295L149.236 7.8147Z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span data-note="C">
                      <span className="note note-0 type-none">
                        <span className="natural">
                          <span>C</span>
                          <span>
                          </span>
                        </span>
                      </span>
                    </span>
                                    <span data-note="G">
                      <span className="note note-1 type-major in-key">
                        <span className="natural">
                          <span>G</span>
                          <span>
                          </span>
                        </span>
                      </span>
                      <span className="grade grade-1">IV</span>
                    </span>
                                    <span data-note="D">
                      <span className="note note-2 type-major current in-key">
                        <span className="natural">
                          <span>D</span>
                          <span>
                          </span>
                        </span>
                      </span>
                      <span className="grade grade-2">I</span>
                    </span>
                                    <span data-note="A">
                      <span className="note note-3 type-major in-key">
                        <span className="natural">
                          <span>A</span>
                          <span>
                          </span>
                        </span>
                      </span>
                      <span className="grade grade-3">V</span>
                    </span>
                                    <span data-note="E">
                      <span className="note note-4 type-minor in-key">
                        <span className="natural">
                          <span>E</span>
                          <span>
                          </span>
                        </span>
                      </span>
                      <span className="grade grade-4">ii</span>
                    </span>
                                    <span data-note="B">
                      <span className="note note-5 type-minor in-key">
                        <span className="natural">
                          <span>B</span>
                          <span>
                          </span>
                        </span>
                      </span>
                      <span className="grade grade-5">vi</span>
                    </span>
                                    <span data-note="F#">
                      <span className="note note-6 type-minor in-key">
                        <span className="sharp">
                          <span>F</span>
                          <span>#</span>
                        </span>
                      </span>
                      <span className="grade grade-6">iii</span>
                    </span>
                                    <span data-note="C#">
                      <span className="note note-7 type-diminished in-key">
                        <span className="sharp">
                          <span>C</span>
                          <span>#</span>
                        </span>
                      </span>
                      <span className="grade grade-7">vii°</span>
                    </span>
                                    <span data-note="G#">
                      <span className="note note-8 type-none">
                        <span className="sharp">
                          <span>G</span>
                          <span>#</span>
                        </span>
                      </span>
                    </span>
                                    <span data-note="Eb">
                      <span className="note note-9 type-none">
                        <span className="flat">
                          <span>E</span>
                          <span>b</span>
                        </span>
                      </span>
                    </span>
                                    <span data-note="Bb">
                      <span className="note note-10 type-none">
                        <span className="flat">
                          <span>B</span>
                          <span>b</span>
                        </span>
                      </span>
                    </span>
                                    <span data-note="F">
                      <span className="note note-11 type-none">
                        <span className="natural">
                          <span>F</span>
                          <span>
                          </span>
                        </span>
                      </span>
                    </span>
                                    <div className="wheel-lines">
                                        <svg className="wheel-lines-svg" height="320" width="320" viewBox="0 0 320 320">
                                            <polygon
                                                points="250.06664199358164 212, 212 250.0666419935816, 108.00000000000003 250.06664199358164, 212 69.93335800641839">
                                            </polygon>
                                            <circle cx="250.06664199358164" cy="212" r="6" className="non-root">
                                            </circle>
                                            <circle cx="212" cy="250.0666419935816" r="6" className="non-root">
                                            </circle>
                                            <circle cx="108.00000000000003" cy="250.06664199358164" r="6"
                                                    className="root">
                                            </circle>
                                            <circle cx="212" cy="69.93335800641839" r="6" className="non-root">
                                            </circle>
                                        </svg>
                                    </div>
                                </div>
                                <div className="wheel-background">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box box-staff opened">
                        <div className="box-header" role="button">
                            <div className="box-header-inner">
                                <span className="box-header-title">Staff</span>
                            </div>
                            <span className="box-header-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                       xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                          d="M8.70621 11.4138L11.2962 14.0038C11.6862 14.3938 12.3162 14.3938 12.7062 14.0038L15.2962 11.4138C15.9262 10.7838 15.4762 9.70375 14.5862 9.70375H9.40621C8.51621 9.70375 8.07621 10.7838 8.70621 11.4138Z"
                          fill="black">
                      </path>
                    </g>
                  </svg>
                </span>
                        </div>
                        <div className="box-body">
                            <div className="staffs theme-notes">
                                <div className="staffs-braces">
                                    <svg width="12" height="160" viewBox="0 0 12 160" fill="none" className="svg-icon "
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M10.421 104.102C10.421 116.733 5.05263 129.074 5.05263 141.125C5.05263 147.659 6.63157 153.757 11.8421 158.548C12 158.693 12 158.984 12 159.129C12 159.564 11.6842 160 11.2105 160C11.0526 160 10.7368 159.855 10.5789 159.71C3.63158 153.176 1.26316 144.61 1.26316 135.463C1.26316 122.541 6.94736 109.909 6.94736 97.7132C6.94736 91.1797 5.21052 85.0817 0.157895 80.2904C0 80.1452 0 80.1452 0 80C0 79.8548 0 79.8548 0.157895 79.7096C5.21052 74.9183 6.94736 68.8203 6.94736 62.2868C6.94736 50.0907 1.26316 37.4592 1.26316 24.5372C1.26316 15.3902 3.63158 6.82395 10.5789 0.290375C10.7368 0.145184 11.0526 0 11.2105 0C11.6842 0 12 0.435568 12 0.87114C12 1.01633 12 1.30671 11.8421 1.4519C6.63157 6.24319 5.05263 12.3412 5.05263 18.8748C5.05263 30.9256 10.421 43.2668 10.421 55.8984C10.421 64.9002 8.05263 73.4664 1.26316 80C8.05263 86.5336 10.421 95.0998 10.421 104.102Z"
                                                fill="black">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="staff staff-treble">
                                    <div className="clef clef-treble">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="M14.6234 2.07809C14.8029 3.91852 13.4348 5.40792 12.2232 6.61186C11.6728 7.13992 12.1319 6.69899 11.8442 6.96154C11.784 6.67956 11.6684 5.94251 11.6793 5.7194C11.756 4.13352 13.0449 1.84138 14.1742 0.995953C14.3561 1.33545 14.5056 1.36277 14.6234 2.07809ZM15.0066 11.5808C14.2813 11.0474 13.3288 10.9073 12.4554 11.0598C12.3428 10.321 12.2302 9.58217 12.1175 8.84395C13.5013 7.47288 15.006 5.88153 15.0849 3.81686C15.1196 2.50289 14.9224 1.06683 14.0971 0C13.0961 0.0754882 12.3902 1.26922 11.8589 2.01127C10.9824 3.58338 11.187 5.49452 11.5234 7.18972C11.0469 7.75016 10.3874 8.21581 9.91777 8.79921C8.53074 10.1579 7.32251 11.9958 7.56028 14.0256C7.6682 15.9883 9.08465 17.8133 11.016 18.2801C11.7494 18.4656 12.5254 18.4838 13.2673 18.3384C13.3967 19.663 13.8716 21.0635 13.3217 22.3492C12.9092 23.2899 11.6807 24.1176 10.7712 23.6396C10.4183 23.4536 10.7043 23.6096 10.4898 23.4912C11.1196 23.34 11.667 22.8814 11.8202 22.5699C12.3135 21.7081 11.5849 20.4277 10.5514 20.5931C9.21975 20.6202 8.67321 22.4416 9.52964 23.3511C10.3225 24.246 11.7861 24.1235 12.7263 23.5383C13.7933 22.8437 13.9269 21.452 13.8051 20.264C13.7639 19.8649 13.5678 18.6922 13.5437 18.2701C13.954 18.1235 13.6667 18.2354 14.246 18.0058C15.8119 17.3859 16.811 15.4985 16.3618 13.8131C16.1746 12.9483 15.7472 12.0977 15.0066 11.5808V11.5808ZM15.3369 14.9699C15.4629 16.142 14.717 17.5136 13.5243 17.8898C13.4442 17.4218 13.423 17.2947 13.3697 17.0215C13.0858 15.5733 12.9317 14.0857 12.7127 12.6175C13.6691 12.5186 14.7482 12.9371 15.0808 13.9032C15.2244 14.2429 15.2827 14.6079 15.3369 14.9699V14.9699ZM12.3059 18.0288C10.8082 18.1118 9.36274 17.0898 8.98904 15.6263C8.54811 14.3588 8.67803 12.9006 9.47218 11.7974C10.1286 10.7955 11.0066 9.96953 11.8438 9.12299C11.9515 9.78645 12.0593 10.4499 12.167 11.114C10.4064 11.5743 9.22081 13.8955 10.2743 15.5003C10.5878 15.9501 11.4379 16.809 11.9024 16.4622C11.2536 16.0602 10.723 15.3679 10.8371 14.5625C10.7888 13.8078 11.6436 12.8488 12.3979 12.6799C12.656 14.3688 12.9521 16.255 13.2102 17.9446C12.9126 18.0034 12.609 18.0288 12.3059 18.0288Z"
                                                    fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="lines">
                      <span>
                      </span>
                                        <span>
                      </span>
                                        <span>
                      </span>
                                        <span>
                      </span>
                                        <span>
                      </span>
                                    </div>
                                    <div className="notes treble">
                                        <div className="ledger-lines">
                        <span>
                        </span>
                                            <span>
                        </span>
                                            <span>
                        </span>
                                            <span>
                        </span>
                                        </div>
                                        <span className="note treble note-G4 note-G4">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note treble note-B4 note-Bb4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon flat "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M8.855 13.9023C8.855 9.26096 8.85451 4.64154 8.85451 0H7.36566C7.36566 7.90116 7.36688 16.0991 7.36688 24C8.53808 23.353 9.86506 22.0909 11.5124 21.0238C13.5544 19.7019 16.3649 18.4983 16.6145 16.0281C17.0279 11.9426 10.8737 12.2447 8.855 13.9023ZM8.855 21.4493C8.855 19.5006 8.855 17.5522 8.855 15.603C9.76299 13.8135 12.8702 13.8187 13.1067 15.8157C13.4078 18.3605 10.0172 20.1952 8.855 21.4493Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note treble note-D5 note-D5">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note treble note-F5 note-F5">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note treble note-F3 note-F3">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note treble note-D4 note-D4">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note treble note-G3 note-G3">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note treble note-A3 note-Ab3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon flat "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M8.855 13.9023C8.855 9.26096 8.85451 4.64154 8.85451 0H7.36566C7.36566 7.90116 7.36688 16.0991 7.36688 24C8.53808 23.353 9.86506 22.0909 11.5124 21.0238C13.5544 19.7019 16.3649 18.4983 16.6145 16.0281C17.0279 11.9426 10.8737 12.2447 8.855 13.9023ZM8.855 21.4493C8.855 19.5006 8.855 17.5522 8.855 15.603C9.76299 13.8135 12.8702 13.8187 13.1067 15.8157C13.4078 18.3605 10.0172 20.1952 8.855 21.4493Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                    </div>
                                    <div className="signature treble">
                      <span className="sharp" title="F">
                        <span className="hover-zone">
                        </span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon sharp "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M15.5245 8.8909V5.69466L14.0718 6.0784V0H13.1418V6.32354L11.0272 6.88132V0.813523H10.0974V7.12622L8.47546 7.55407V10.8086L10.0974 10.3675V15.146L8.47546 15.5738V18.8279L10.0974 18.3868V24H11.0272V18.1342L13.1418 17.5588V23.1867H14.0718V17.3057L15.5245 16.9107V13.7144L14.0718 14.0977V9.28621L15.5245 8.8909ZM13.1416 14.3431L11.0269 14.9008V10.1144L13.1416 9.53906V14.3431V14.3431Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="sharp" title="C">
                        <span className="hover-zone">
                        </span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon sharp "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M15.5245 8.8909V5.69466L14.0718 6.0784V0H13.1418V6.32354L11.0272 6.88132V0.813523H10.0974V7.12622L8.47546 7.55407V10.8086L10.0974 10.3675V15.146L8.47546 15.5738V18.8279L10.0974 18.3868V24H11.0272V18.1342L13.1418 17.5588V23.1867H14.0718V17.3057L15.5245 16.9107V13.7144L14.0718 14.0977V9.28621L15.5245 8.8909ZM13.1416 14.3431L11.0269 14.9008V10.1144L13.1416 9.53906V14.3431V14.3431Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                    </div>
                                </div>
                                <div className="staff staff-bass">
                                    <div className="clef clef-bass">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M2.25521 24C2.17564 23.796 2.09024 23.598 2 23.4049C3.16419 22.5738 4.35968 21.8405 5.48579 21.0244C6.62208 20.2013 7.69191 19.3284 8.67416 18.3464C11.0972 15.9234 13.1956 13.0858 13.8389 8.8667C13.974 7.98197 13.9493 7.08268 13.8178 6.16739C13.4619 3.69296 12.4717 1.60522 9.99167 1.21489C8.1145 0.919419 6.40836 1.44099 5.54935 2.51154C5.35091 2.75899 5.17382 3.0598 4.99697 3.42562C4.88319 3.65973 4.57947 4.22399 4.65686 4.44596C4.84438 4.98403 5.81862 4.51728 6.20847 4.48842C7.35786 4.40302 8.32968 4.99786 8.82263 5.57255C9.40169 6.24671 9.67291 7.35341 9.03538 8.27186C8.21809 9.44916 6.20289 9.98747 4.61416 9.27085C4.19254 9.08066 3.73768 8.78058 3.4667 8.39947C2.92063 7.63142 2.65305 6.4716 2.76513 5.38139C2.87745 4.28949 3.34905 3.4004 3.89172 2.72454C4.91813 1.44439 6.65556 0.165931 8.86532 0.0245009C10.9535 -0.109167 12.7089 0.316338 14.0939 1.00214C15.4965 1.69668 16.5256 2.71872 17.2611 4.02046C18.0047 5.33724 18.4814 7.15594 18.3026 9.10031C18.1333 10.9413 17.397 12.2921 16.5596 13.5424C14.9158 15.9974 12.6519 17.8916 10.2042 19.579C7.75523 21.2677 5.06174 22.7492 2.25521 24Z"
                                                      fill="black">
                                                </path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M20.8318 2.44774C21.8143 2.3575 22.48 3.08527 22.5535 3.87175C22.6534 4.94594 21.7959 5.6611 20.8743 5.61476C20.0926 5.57546 19.3651 4.96341 19.3651 4.0207C19.3651 3.17503 19.998 2.52416 20.8318 2.44774Z"
                                                      fill="black">
                                                </path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M20.8105 9.07895C21.7552 8.97804 22.4771 9.62818 22.5535 10.503C22.6396 11.492 21.8772 12.2334 20.9808 12.246C19.559 12.2656 18.9134 10.5719 19.7907 9.58912C20.0291 9.32155 20.3542 9.12796 20.8105 9.07895Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="lines">
                      <span>
                      </span>
                                        <span>
                      </span>
                                        <span>
                      </span>
                                        <span>
                      </span>
                                        <span>
                      </span>
                                    </div>
                                    <div className="notes bass">
                      <span className="note bass note-G4 note-G4">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note bass note-B4 note-Bb4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon flat "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M8.855 13.9023C8.855 9.26096 8.85451 4.64154 8.85451 0H7.36566C7.36566 7.90116 7.36688 16.0991 7.36688 24C8.53808 23.353 9.86506 22.0909 11.5124 21.0238C13.5544 19.7019 16.3649 18.4983 16.6145 16.0281C17.0279 11.9426 10.8737 12.2447 8.855 13.9023ZM8.855 21.4493C8.855 19.5006 8.855 17.5522 8.855 15.603C9.76299 13.8135 12.8702 13.8187 13.1067 15.8157C13.4078 18.3605 10.0172 20.1952 8.855 21.4493Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note bass note-D5 note-D5">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note bass note-F5 note-F5">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note bass note-F3 note-F3">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note bass note-D4 note-D4">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note bass note-G3 note-G3">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="note bass note-A3 note-Ab3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon flat "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M8.855 13.9023C8.855 9.26096 8.85451 4.64154 8.85451 0H7.36566C7.36566 7.90116 7.36688 16.0991 7.36688 24C8.53808 23.353 9.86506 22.0909 11.5124 21.0238C13.5544 19.7019 16.3649 18.4983 16.6145 16.0281C17.0279 11.9426 10.8737 12.2447 8.855 13.9023ZM8.855 21.4493C8.855 19.5006 8.855 17.5522 8.855 15.603C9.76299 13.8135 12.8702 13.8187 13.1067 15.8157C13.4078 18.3605 10.0172 20.1952 8.855 21.4493Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="svg-icon whole "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M11.4003 11.0062C8.45691 10.8505 6.1568 8.23772 5.23385 5.53589C4.67467 3.95011 4.98178 1.57112 6.84467 1.12568C9.54366 0.667278 11.7833 2.96005 13.0385 5.15409C13.9327 6.78141 14.427 9.34401 12.7505 10.634C12.3524 10.9009 11.8712 11.008 11.4003 11.0062ZM16.0893 1.74342C12.7731 -0.270688 8.58411 -0.427557 4.95278 0.699617C2.65251 1.50387 0.021755 3.21464 7.50508e-07 5.99909C-0.00159353 8.7273 2.53712 10.4293 4.78367 11.2399C8.34027 12.4033 12.4439 12.301 15.7646 10.4463C17.6442 9.4463 19.3102 7.3754 18.7453 5.08012C18.4346 3.60417 17.304 2.49981 16.0893 1.74342Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                    </div>
                                    <div className="signature bass">
                      <span className="sharp" title="F">
                        <span className="hover-zone">
                        </span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon sharp "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M15.5245 8.8909V5.69466L14.0718 6.0784V0H13.1418V6.32354L11.0272 6.88132V0.813523H10.0974V7.12622L8.47546 7.55407V10.8086L10.0974 10.3675V15.146L8.47546 15.5738V18.8279L10.0974 18.3868V24H11.0272V18.1342L13.1418 17.5588V23.1867H14.0718V17.3057L15.5245 16.9107V13.7144L14.0718 14.0977V9.28621L15.5245 8.8909ZM13.1416 14.3431L11.0269 14.9008V10.1144L13.1416 9.53906V14.3431V14.3431Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                        <span className="sharp" title="C">
                        <span className="hover-zone">
                        </span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon sharp "
                             xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                                d="M15.5245 8.8909V5.69466L14.0718 6.0784V0H13.1418V6.32354L11.0272 6.88132V0.813523H10.0974V7.12622L8.47546 7.55407V10.8086L10.0974 10.3675V15.146L8.47546 15.5738V18.8279L10.0974 18.3868V24H11.0272V18.1342L13.1418 17.5588V23.1867H14.0718V17.3057L15.5245 16.9107V13.7144L14.0718 14.0977V9.28621L15.5245 8.8909ZM13.1416 14.3431L11.0269 14.9008V10.1144L13.1416 9.53906V14.3431V14.3431Z"
                                fill="black">
                            </path>
                          </g>
                        </svg>
                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layout-bottom-right">
                    <div className="box box-key opened">
                        <div className="box-header" role="button">
                            <div className="box-header-inner">
                                <span className="box-header-title">Key</span>
                            </div>
                            <span className="box-header-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                       xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                          d="M8.70621 11.4138L11.2962 14.0038C11.6862 14.3938 12.3162 14.3938 12.7062 14.0038L15.2962 11.4138C15.9262 10.7838 15.4762 9.70375 14.5862 9.70375H9.40621C8.51621 9.70375 8.07621 10.7838 8.70621 11.4138Z"
                          fill="black">
                      </path>
                    </g>
                  </svg>
                </span>
                        </div>
                        <div className="box-menu">
                            <div className="picker-group theme-key">
                                <div className="picker picker-notes">
                                    <div className="picker-toggle">
                                        <span>D</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="M8.70621 11.4138L11.2962 14.0038C11.6862 14.3938 12.3162 14.3938 12.7062 14.0038L15.2962 11.4138C15.9262 10.7838 15.4762 9.70375 14.5862 9.70375H9.40621C8.51621 9.70375 8.07621 10.7838 8.70621 11.4138Z"
                                                    fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="picker picker-keys">
                                    <div className="picker-toggle">
                                        <span>major</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="M8.70621 11.4138L11.2962 14.0038C11.6862 14.3938 12.3162 14.3938 12.7062 14.0038L15.2962 11.4138C15.9262 10.7838 15.4762 9.70375 14.5862 9.70375H9.40621C8.51621 9.70375 8.07621 10.7838 8.70621 11.4138Z"
                                                    fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="button-group touching">
                                <button className="select-key small-on-mobile" disabled>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M20.7152 2.06862H4.46521C3.42966 2.06862 2.59021 2.90807 2.59021 3.94362V20.1936C2.59021 21.2292 3.42966 22.0686 4.46521 22.0686H20.7152C21.7508 22.0686 22.5902 21.2292 22.5902 20.1936V3.94362C22.5902 2.90807 21.7508 2.06862 20.7152 2.06862ZM6.96521 20.8186H4.46521C4.12001 20.8186 3.84021 20.5388 3.84021 20.1936V3.94362C3.84021 3.59842 4.12001 3.31862 4.46521 3.31862H5.71521V12.6936C5.71521 13.0388 5.99501 13.3186 6.34021 13.3186H6.96521V20.8186ZM11.9652 20.8186H8.21521V13.3186H8.84021C9.18541 13.3186 9.46521 13.0388 9.46521 12.6936V3.31862H10.7152V12.6936C10.7152 13.0388 10.995 13.3186 11.3402 13.3186H11.9652V20.8186ZM16.9652 20.8186H13.2152V13.3186H13.8402C14.1854 13.3186 14.4652 13.0388 14.4652 12.6936V3.31862H15.7152V12.6936C15.7152 13.0388 15.995 13.3186 16.3402 13.3186H16.9652V20.8186ZM21.3402 20.1936C21.3402 20.5388 21.0604 20.8186 20.7152 20.8186H18.2152V13.3186H18.8402C19.1854 13.3186 19.4652 13.0388 19.4652 12.6936V3.31862H20.7152C21.0604 3.31862 21.3402 3.59842 21.3402 3.94362V20.1936Z"
                                                fill="black">
                                            </path>
                                        </g>
                                    </svg>
                                    <span className="text">Select</span>
                                </button>
                                <button className="small-on-mobile">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.1C10.47 7.85 10 8.09 10 8.5V15.5C10 15.91 10.47 16.15 10.8 15.9ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"
                                                  fill="black">
                                            </path>
                                        </g>
                                    </svg>
                                    <span className="text">Play</span>
                                </button>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="notes-with-intervals">
                  <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Perfect unison">P1</span>
                      <span className="note" role="button">
                        <span className="natural">
                          <span>D</span>
                          <span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="Major second">M2</span>
                  </span>
                                <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Major second">M2</span>
                      <span className="note" role="button">
                        <span className="natural">
                          <span>E</span>
                          <span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="Major second">M2</span>
                  </span>
                                <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Major third">M3</span>
                      <span className="note" role="button">
                        <span className="sharp">
                          <span>F</span>
                          <span>#</span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="Minor second">m2</span>
                  </span>
                                <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Perfect fourth">P4</span>
                      <span className="note" role="button">
                        <span className="natural">
                          <span>G</span>
                          <span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="Major second">M2</span>
                  </span>
                                <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Perfect fifth">P5</span>
                      <span className="note" role="button">
                        <span className="natural">
                          <span>A</span>
                          <span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="Major second">M2</span>
                  </span>
                                <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Major sixth">M6</span>
                      <span className="note" role="button">
                        <span className="natural">
                          <span>B</span>
                          <span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="Major second">M2</span>
                  </span>
                                <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Major seventh">M7</span>
                      <span className="note" role="button">
                        <span className="sharp">
                          <span>C</span>
                          <span>#</span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="undefined undefined">
                    </span>
                  </span>
                            </div>
                            <div className="chords-with-grades">
                  <span role="button" className="pair pair-major">
                    <span className="grade">I</span>
                    <span className="chord">Dmaj7</span>
                    <span className="harmonic-function">
                    </span>
                  </span>
                                <span role="button" className="pair pair-minor">
                    <span className="grade">ii</span>
                    <span className="chord">Em7</span>
                    <span className="harmonic-function">Dominant</span>
                  </span>
                                <span role="button" className="pair pair-minor">
                    <span className="grade">iii</span>
                    <span className="chord">F#m7</span>
                    <span className="harmonic-function">
                    </span>
                  </span>
                                <span role="button" className="pair pair-major">
                    <span className="grade">IV</span>
                    <span className="chord">Gmaj7</span>
                    <span className="harmonic-function">Dominant</span>
                  </span>
                                <span role="button" className="pair pair-major">
                    <span className="grade">V</span>
                    <span className="chord">A7</span>
                    <span className="harmonic-function">
                    </span>
                  </span>
                                <span role="button" className="pair pair-minor">
                    <span className="grade">vi</span>
                    <span className="chord">Bm7</span>
                    <span className="harmonic-function">
                    </span>
                  </span>
                                <span role="button" className="pair pair-diminished current">
                    <span className="grade">vii°</span>
                    <span className="chord">C#m7b5</span>
                    <span className="harmonic-function">
                    </span>
                  </span>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="relative-key">
                                <span className="label">Relative Key:</span>
                                <span className="value">
                    <button className="small theme-key">B minor</button>
                  </span>
                            </div>
                        </div>
                    </div>
                    <div className="box box-chord opened">
                        <div className="box-header" role="button">
                            <div className="box-header-inner">
                                <span className="box-header-title">Chord</span>
                            </div>
                            <span className="box-header-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                       xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                          d="M8.70621 11.4138L11.2962 14.0038C11.6862 14.3938 12.3162 14.3938 12.7062 14.0038L15.2962 11.4138C15.9262 10.7838 15.4762 9.70375 14.5862 9.70375H9.40621C8.51621 9.70375 8.07621 10.7838 8.70621 11.4138Z"
                          fill="black">
                      </path>
                    </g>
                  </svg>
                </span>
                        </div>
                        <div className="box-menu">
                            <div className="picker-group theme-chord">
                                <div className="picker picker-notes">
                                    <div className="picker-toggle">
                                        <span>C#</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="M8.70621 11.4138L11.2962 14.0038C11.6862 14.3938 12.3162 14.3938 12.7062 14.0038L15.2962 11.4138C15.9262 10.7838 15.4762 9.70375 14.5862 9.70375H9.40621C8.51621 9.70375 8.07621 10.7838 8.70621 11.4138Z"
                                                    fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="picker picker-chords">
                                    <div className="picker-toggle">
                                        <span>half-diminished</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="M8.70621 11.4138L11.2962 14.0038C11.6862 14.3938 12.3162 14.3938 12.7062 14.0038L15.2962 11.4138C15.9262 10.7838 15.4762 9.70375 14.5862 9.70375H9.40621C8.51621 9.70375 8.07621 10.7838 8.70621 11.4138Z"
                                                    fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="button-group touching">
                                <button className="small-on-mobile" disabled>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M20.7152 2.06862H4.46521C3.42966 2.06862 2.59021 2.90807 2.59021 3.94362V20.1936C2.59021 21.2292 3.42966 22.0686 4.46521 22.0686H20.7152C21.7508 22.0686 22.5902 21.2292 22.5902 20.1936V3.94362C22.5902 2.90807 21.7508 2.06862 20.7152 2.06862ZM6.96521 20.8186H4.46521C4.12001 20.8186 3.84021 20.5388 3.84021 20.1936V3.94362C3.84021 3.59842 4.12001 3.31862 4.46521 3.31862H5.71521V12.6936C5.71521 13.0388 5.99501 13.3186 6.34021 13.3186H6.96521V20.8186ZM11.9652 20.8186H8.21521V13.3186H8.84021C9.18541 13.3186 9.46521 13.0388 9.46521 12.6936V3.31862H10.7152V12.6936C10.7152 13.0388 10.995 13.3186 11.3402 13.3186H11.9652V20.8186ZM16.9652 20.8186H13.2152V13.3186H13.8402C14.1854 13.3186 14.4652 13.0388 14.4652 12.6936V3.31862H15.7152V12.6936C15.7152 13.0388 15.995 13.3186 16.3402 13.3186H16.9652V20.8186ZM21.3402 20.1936C21.3402 20.5388 21.0604 20.8186 20.7152 20.8186H18.2152V13.3186H18.8402C19.1854 13.3186 19.4652 13.0388 19.4652 12.6936V3.31862H20.7152C21.0604 3.31862 21.3402 3.59842 21.3402 3.94362V20.1936Z"
                                                fill="black">
                                            </path>
                                        </g>
                                    </svg>
                                    <span className="text">Select</span>
                                </button>
                                <button className="small-on-mobile">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM10.8 8.1C10.47 7.85 10 8.09 10 8.5V15.5C10 15.91 10.47 16.15 10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.1Z"
                                                  fill="black">
                                            </path>
                                        </g>
                                    </svg>
                                    <span className="text">Play</span>
                                </button>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="notes-with-intervals">
                  <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Perfect unison">P1</span>
                      <span className="note" role="button">
                        <span className="sharp">
                          <span>C</span>
                          <span>#</span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="Minor third">m3</span>
                  </span>
                                <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Minor third">m3</span>
                      <span className="note" role="button">
                        <span className="natural">
                          <span>E</span>
                          <span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="Minor third">m3</span>
                  </span>
                                <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Diminished fifth">d5</span>
                      <span className="note" role="button">
                        <span className="natural">
                          <span>G</span>
                          <span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="Major third">M3</span>
                  </span>
                                <span className="pair">
                    <div className="note-root">
                      <span className="root-interval" title="Minor seventh">m7</span>
                      <span className="note" role="button">
                        <span className="natural">
                          <span>B</span>
                          <span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span className="relative-interval" title="undefined undefined">
                    </span>
                  </span>
                            </div>
                            <div className="chord-search-wrap">
                                <div className="chord-search">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M15.1866 14.4716H15.9766L20.2166 18.7316C20.6266 19.1416 20.6266 19.8116 20.2166 20.2216C19.8066 20.6316 19.1366 20.6316 18.7266 20.2216L14.4766 15.9716V15.1816L14.2066 14.9016C12.8066 16.1016 10.8966 16.7216 8.86658 16.3816C6.08658 15.9116 3.86658 13.5916 3.52658 10.7916C3.00658 6.56156 6.56658 3.00156 10.7966 3.52156C13.5966 3.86156 15.9166 6.08156 16.3866 8.86156C16.7266 10.8916 16.1066 12.8016 14.9066 14.2016L15.1866 14.4716ZM5.47658 9.97156C5.47658 12.4616 7.48658 14.4716 9.97658 14.4716C12.4666 14.4716 14.4766 12.4616 14.4766 9.97156C14.4766 7.48156 12.4666 5.47156 9.97658 5.47156C7.48658 5.47156 5.47658 7.48156 5.47658 9.97156Z"
                                                  fill="black">
                                            </path>
                                        </g>
                                    </svg>
                                    <input className="chord-search-input" type="text" placeholder="Cm, F7b9..."
                                           value="">
                                        <div className="chord-search-result">
                                            <span className="empty">No chord found.</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer box-footer-chord">
                            <div className="chord-aliases">C#m7b5, C#ø, C#-7b5, C#h7, C#h</div>
                            <div className="predicted-chords">
                                <div className="button-group">
                                    <button className="button small theme-chord">Bb7add6</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box box-prog opened">
                        <div className="box-header" role="button">
                            <div className="box-header-inner">
                                <span className="box-header-title">Chord Progression</span>
                            </div>
                            <span className="box-header-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                       xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                          d="M8.70621 11.4138L11.2962 14.0038C11.6862 14.3938 12.3162 14.3938 12.7062 14.0038L15.2962 11.4138C15.9262 10.7838 15.4762 9.70375 14.5862 9.70375H9.40621C8.51621 9.70375 8.07621 10.7838 8.70621 11.4138Z"
                          fill="black">
                      </path>
                    </g>
                  </svg>
                </span>
                        </div>
                        <div className="box-menu">
                <span>
                </span>
                            <div className="button-group touching">
                                <button className="small-on-mobile">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM10.8 8.1C10.47 7.85 10 8.09 10 8.5V15.5C10 15.91 10.47 16.15 10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.1Z"
                                                  fill="black">
                                            </path>
                                        </g>
                                    </svg>
                                    <span className="text">Play</span>
                                </button>
                                <button className="small-on-mobile">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2 12C2 6.47 6.47 2 12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12ZM14.89 16.3C15.28 16.69 15.91 16.69 16.3 16.3C16.68 15.91 16.68 15.27 16.3 14.89L13.41 12L16.3 9.11C16.69 8.72 16.69 8.09 16.3 7.7C15.91 7.31 15.28 7.31 14.89 7.7L12 10.59L9.11 7.7C8.72 7.31 8.09 7.31 7.7 7.7C7.51275 7.88683 7.40751 8.14048 7.40751 8.405C7.40751 8.66952 7.51275 8.92317 7.7 9.11L10.59 12L7.7 14.89C7.51275 15.0768 7.40751 15.3305 7.40751 15.595C7.40751 15.8595 7.51275 16.1132 7.7 16.3C8.09 16.69 8.72 16.69 9.11 16.3L12 13.41L14.89 16.3Z"
                                                  fill="black">
                                            </path>
                                        </g>
                                    </svg>
                                    <span className="text">Clear</span>
                                </button>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="chord-progs">
                                <div className="prog">
                                    <button className="prog-name">Gm7</button>
                                    <button className="prog-op prog-copy">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 1H4.5C3.4 1 2.5 1.9 2.5 3V16C2.5 16.55 2.95 17 3.5 17C4.05 17 4.5 16.55 4.5 16V4C4.5 3.45 4.95 3 5.5 3H15.5C16.05 3 16.5 2.55 16.5 2C16.5 1.45 16.05 1 15.5 1ZM19.5 5H8.5C7.4 5 6.5 5.9 6.5 7V21C6.5 22.1 7.4 23 8.5 23H19.5C20.6 23 21.5 22.1 21.5 21V7C21.5 5.9 20.6 5 19.5 5ZM9.5 21H18.5C19.05 21 19.5 20.55 19.5 20V8C19.5 7.45 19.05 7 18.5 7H9.5C8.95 7 8.5 7.45 8.5 8V20C8.5 20.55 8.95 21 9.5 21Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button className="prog-op prog-remove">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon sharp " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className="prog">
                                    <button className="prog-name">Bb7</button>
                                    <button className="prog-op prog-copy">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 1H4.5C3.4 1 2.5 1.9 2.5 3V16C2.5 16.55 2.95 17 3.5 17C4.05 17 4.5 16.55 4.5 16V4C4.5 3.45 4.95 3 5.5 3H15.5C16.05 3 16.5 2.55 16.5 2C16.5 1.45 16.05 1 15.5 1ZM19.5 5H8.5C7.4 5 6.5 5.9 6.5 7V21C6.5 22.1 7.4 23 8.5 23H19.5C20.6 23 21.5 22.1 21.5 21V7C21.5 5.9 20.6 5 19.5 5ZM9.5 21H18.5C19.05 21 19.5 20.55 19.5 20V8C19.5 7.45 19.05 7 18.5 7H9.5C8.95 7 8.5 7.45 8.5 8V20C8.5 20.55 8.95 21 9.5 21Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button className="prog-op prog-remove">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon sharp " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className="prog">
                                    <button className="prog-name">Fm7</button>
                                    <button className="prog-op prog-copy">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 1H4.5C3.4 1 2.5 1.9 2.5 3V16C2.5 16.55 2.95 17 3.5 17C4.05 17 4.5 16.55 4.5 16V4C4.5 3.45 4.95 3 5.5 3H15.5C16.05 3 16.5 2.55 16.5 2C16.5 1.45 16.05 1 15.5 1ZM19.5 5H8.5C7.4 5 6.5 5.9 6.5 7V21C6.5 22.1 7.4 23 8.5 23H19.5C20.6 23 21.5 22.1 21.5 21V7C21.5 5.9 20.6 5 19.5 5ZM9.5 21H18.5C19.05 21 19.5 20.55 19.5 20V8C19.5 7.45 19.05 7 18.5 7H9.5C8.95 7 8.5 7.45 8.5 8V20C8.5 20.55 8.95 21 9.5 21Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button className="prog-op prog-remove">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon sharp " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className="prog">
                                    <button className="prog-name">Fm7</button>
                                    <button className="prog-op prog-copy">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 1H4.5C3.4 1 2.5 1.9 2.5 3V16C2.5 16.55 2.95 17 3.5 17C4.05 17 4.5 16.55 4.5 16V4C4.5 3.45 4.95 3 5.5 3H15.5C16.05 3 16.5 2.55 16.5 2C16.5 1.45 16.05 1 15.5 1ZM19.5 5H8.5C7.4 5 6.5 5.9 6.5 7V21C6.5 22.1 7.4 23 8.5 23H19.5C20.6 23 21.5 22.1 21.5 21V7C21.5 5.9 20.6 5 19.5 5ZM9.5 21H18.5C19.05 21 19.5 20.55 19.5 20V8C19.5 7.45 19.05 7 18.5 7H9.5C8.95 7 8.5 7.45 8.5 8V20C8.5 20.55 8.95 21 9.5 21Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button className="prog-op prog-remove">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon sharp " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className="prog">
                                    <button className="prog-name">Cm7</button>
                                    <button className="prog-op prog-copy">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 1H4.5C3.4 1 2.5 1.9 2.5 3V16C2.5 16.55 2.95 17 3.5 17C4.05 17 4.5 16.55 4.5 16V4C4.5 3.45 4.95 3 5.5 3H15.5C16.05 3 16.5 2.55 16.5 2C16.5 1.45 16.05 1 15.5 1ZM19.5 5H8.5C7.4 5 6.5 5.9 6.5 7V21C6.5 22.1 7.4 23 8.5 23H19.5C20.6 23 21.5 22.1 21.5 21V7C21.5 5.9 20.6 5 19.5 5ZM9.5 21H18.5C19.05 21 19.5 20.55 19.5 20V8C19.5 7.45 19.05 7 18.5 7H9.5C8.95 7 8.5 7.45 8.5 8V20C8.5 20.55 8.95 21 9.5 21Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button className="prog-op prog-remove">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon sharp " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className="prog">
                                    <button className="prog-name">Cm7</button>
                                    <button className="prog-op prog-copy">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 1H4.5C3.4 1 2.5 1.9 2.5 3V16C2.5 16.55 2.95 17 3.5 17C4.05 17 4.5 16.55 4.5 16V4C4.5 3.45 4.95 3 5.5 3H15.5C16.05 3 16.5 2.55 16.5 2C16.5 1.45 16.05 1 15.5 1ZM19.5 5H8.5C7.4 5 6.5 5.9 6.5 7V21C6.5 22.1 7.4 23 8.5 23H19.5C20.6 23 21.5 22.1 21.5 21V7C21.5 5.9 20.6 5 19.5 5ZM9.5 21H18.5C19.05 21 19.5 20.55 19.5 20V8C19.5 7.45 19.05 7 18.5 7H9.5C8.95 7 8.5 7.45 8.5 8V20C8.5 20.55 8.95 21 9.5 21Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button className="prog-op prog-remove">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon sharp " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className="prog">
                                    <button className="prog-name">A7</button>
                                    <button className="prog-op prog-copy">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 1H4.5C3.4 1 2.5 1.9 2.5 3V16C2.5 16.55 2.95 17 3.5 17C4.05 17 4.5 16.55 4.5 16V4C4.5 3.45 4.95 3 5.5 3H15.5C16.05 3 16.5 2.55 16.5 2C16.5 1.45 16.05 1 15.5 1ZM19.5 5H8.5C7.4 5 6.5 5.9 6.5 7V21C6.5 22.1 7.4 23 8.5 23H19.5C20.6 23 21.5 22.1 21.5 21V7C21.5 5.9 20.6 5 19.5 5ZM9.5 21H18.5C19.05 21 19.5 20.55 19.5 20V8C19.5 7.45 19.05 7 18.5 7H9.5C8.95 7 8.5 7.45 8.5 8V20C8.5 20.55 8.95 21 9.5 21Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button className="prog-op prog-remove">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon sharp " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className="prog">
                                    <button className="prog-add">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon sharp " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
                                                    fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                        C#m7b5
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box box-wave opened">
                        <div className="box-header" role="button">
                            <div className="box-header-inner">
                                <span className="box-header-title">Sound Wave</span>
                            </div>
                            <span className="box-header-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon "
                       xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                          d="M8.70621 11.4138L11.2962 14.0038C11.6862 14.3938 12.3162 14.3938 12.7062 14.0038L15.2962 11.4138C15.9262 10.7838 15.4762 9.70375 14.5862 9.70375H9.40621C8.51621 9.70375 8.07621 10.7838 8.70621 11.4138Z"
                          fill="black">
                      </path>
                    </g>
                  </svg>
                </span>
                        </div>
                        <div className="box-body">
                            <div className="wave-top">
                                <input className="wave-slider" type="range" min="0" max="100" value="50">
                                    <button className="play small-on-mobile">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             className="svg-icon " xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM10.8 8.1C10.47 7.85 10 8.09 10 8.5V15.5C10 15.91 10.47 16.15 10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.1Z"
                                                      fill="black">
                                                </path>
                                            </g>
                                        </svg>
                                        <span className="text">Play</span>
                                    </button>
                            </div>
                            <div className="wave-canvas-wrap">
                                <canvas id="wave-canvas" className="wave-canvas" width="640" height="300">
                                </canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    !function(e){function r(r) {
    for (var n, l, c = r[0], f = r[1], i = r[2], p = 0, s = []; p < c.length; p++) l = c[p], Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), o[l] = 0;
    for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (e[n] = f[n]);
    for (a && a(r); s.length;) s.shift()();
    return u.push.apply(u, i || []), t()
}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,c=1;c<t.length;c++){var f=t[c];0!==o[f]&&(n=!1)}n&&(u.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={1:0},u=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/chords/";var c=this.webpackJsonpchords=this.webpackJsonpchords||[],f=c.push.bind(c);c.push=r,c=c.slice();for(var i=0;i<c.length;i++)r(c[i]);var a=f;t()}([])
</script>
<script src="/chords/static/js/2.03741c9d.chunk.js"></script>
<script src="/chords/static/js/main.afa19aee.chunk.js"></script>
</body>

</html>