const admin = require("firebase-admin");
const { Vonage } = require("@vonage/server-sdk");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://iot-deneme-yeni-default-rtdb.firebaseio.com",
});

const vonage = new Vonage({
  apiKey: "----------",
  apiSecret: "----------",
});

const db = admin.database();
const otoparkRef = db.ref("Otopark");

const phoneNumber = "-------------";

otoparkRef.on("value", (snapshot) => {
  const otoparkData = snapshot.val();

  if (!otoparkData || !otoparkData.Durum) {
    console.error("Firebase'den geçersiz bir veri alindi!");
    return;
  }

  const durum = otoparkData.Durum;

  vonage.sms
    .send({
      to: phoneNumber,
      from: "Otopark",
      text: `Otopark durumu: ${durum}`,
    })
    .then((response) => {
      console.log("SMS başariyla gönderildi:", response);
    })
    .catch((error) => {
      console.error("SMS gönderilirken hata oluştu:", error);
    });
});
