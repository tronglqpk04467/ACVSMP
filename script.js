// ===== COPY IP JAVA =====
function copyJavaIP() {
    const ip = "uk-lists.gl.joinmc.link";
    navigator.clipboard.writeText(ip);

    const status = document.getElementById("status");
    status.innerText = "✅ Đã copy IP Java: " + ip;

    setTimeout(() => {
        status.innerText = "";
    }, 2000);
}

// ===== COPY IP BEDROCK =====
function copyBedrockIP() {
    const text = "songs-slightly.gl.at.ply.gg\npost: 62243";
    navigator.clipboard.writeText(text);

    const status = document.getElementById("status");
    status.innerText = "✅ Đã copy IP Bedrock";

    setTimeout(() => {
        status.innerText = "";
    }, 2000);
}

// ===== COPY GMAIL =====
function copyGmail() {
    const gmail = "luuquangtrong492007@gmail.com";
    navigator.clipboard.writeText(gmail);

    const gmailStatus = document.getElementById("gmailStatus");
    gmailStatus.innerText = "✅ Đã copy Gmail: " + gmail;

    setTimeout(() => {
        gmailStatus.innerText = "";
    }, 2000);
}
