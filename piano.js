
window.onload = function() {
// 创建 Synth 对象
    var synth = new Tone.Synth({
        oscillator: {
            type: "triangle"
        },
        envelope: {
            attack: 0.1,
            decay: 0.3,
            sustain: 0.5,
            release: 1
        }
    }).toDestination();

// 监听按钮点击事件
    document.getElementById("playBtn").addEventListener("click", function () {
        // 触发音符
        synth.triggerAttackRelease("C4", "4n");
    });
}