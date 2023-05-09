let express = require("express"); //import package express
let bodyParser = require("body-parser");
let app = express(); //instance dari express
let mahasiswas = [
    {
        id: 1,
        nama: "Agus",
    },
    {
        id: 2,
        nama: "Sam",
    },
    {
        id: 3,
        nama: "Alif",
    },
    {
        id: 4,
        nama: "Ary",
    },
    {
        id: 5,
        nama: "Rendra",
    },
    {
        id: 6,
        nama: "Ani",
    },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/all-mahasiswa", (req, res) => {
    res.json(mahasiswas);
});

app.get("/mahasiswa", (req, res) => {
    const id = req.body.id;
    const mahasiswa = mahasiswas.filter((mahasiswa) => mahasiswa.id === id);

    res.json(mahasiswa);
});

app.post("/add-mahasiswa", (req, res) => {
    mahasiswas.push({
        id: mahasiswas.length + 1,
        nama: req.body.nama,
    });
    res.json({
        status: true,
        code: 200,
        msg: "Berhasil",
    });
});

app.put("/update-mahasiswa", (req, res) => {
    //TODO update mahasiswa
});

app.delete("/delete-mahasiswa", (req, res) => {
    //TODO delete mahasiswa
});

app.listen(3000, () => {}); //express mendengarkan req dari port
