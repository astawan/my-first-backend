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
    const selectedMahasiswa = mahasiswas.filter(
        (mahasiswa) => mahasiswa.id === parseInt(id)
    );

    res.json(selectedMahasiswa);
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
    const id = req.body.id;
    const nama = req.body.nama;
    const selectedMahasiswa = mahasiswas.filter(
        (mahasiswa) => mahasiswa.id === parseInt(id)
    )[0];
    selectedMahasiswa.nama = nama;

    res.json({
        status: true,
        code: 200,
        msg: "Berhasil",
    });
});

app.delete("/delete-mahasiswa", (req, res) => {
    const id = req.body.id;

    const selectedMahasiswa = mahasiswas.filter(
        (mahasiswa) => mahasiswa.id === parseInt(id)
    )[0];
    const indexSelected = mahasiswas.indexOf(selectedMahasiswa);
    mahasiswas = mahasiswas.slice(indexSelected, 1);

    res.json({
        status: true,
        code: 200,
        msg: "Berhasil",
    });
});

app.listen(3000, () => {}); //express mendengarkan req dari port
