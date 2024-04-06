const users = [
  {
    name: "charles",
    walletAddress: "7EF3S6iff1GYh8ccTcgNTcP75Gyk7Wpn8Jo3ByH1ABPg",
    qrCode: "qr_link",
  },
  {
    name: "jack",
    walletAddress: "HuD3iFBW5xKKazt9nyzQFMQWPCHQ4qedqn496BchDqvw",
    qrCode: "qr_link2",
  },
];

const newUser = {
  name: "newUser",
  walletAddress: "newWalletAddress",
  qrCode: "newQrCode",
};

users.push(newUser);

export default users;
