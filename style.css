/* ==========================================
   MODPACK DATA
========================================== */

const modpacks = [

    {
        number: "MODPACK 01",

        title: "18TH MODPACK",

        description:
            "High-quality RAGE:MP modpack created for a better gaming experience.",

        download:
            "https://example.com/download-modpack-1",

        images: [
            "images/modpack1/1.jpg",
            "images/modpack1/2.jpg",
            "images/modpack1/3.jpg",
            "images/modpack1/4.jpg"
        ]
    },


    {
        number: "MODPACK 02",

        title: "18TH MODPACK",

        description:
            "A custom RAGE:MP modpack with improved visuals and optimized performance.",

        download:
            "https://example.com/download-modpack-2",

        images: [
            "images/modpack2/1.jpg",
            "images/modpack2/2.jpg",
            "images/modpack2/3.jpg"
        ]
    },


    {
        number: "MODPACK 03",

        title: "18TH MODPACK",

        description:
            "Modern RAGE:MP modifications designed for an immersive experience.",

        download:
            "https://example.com/download-modpack-3",

        images: [
            "images/modpack3/1.jpg",
            "images/modpack3/2.jpg",
            "images/modpack3/3.jpg"
        ]
    },


    {
        number: "MODPACK 04",

        title: "18TH MODPACK",

        description:
            "A complete visual modpack for RAGE:MP.",

        download:
            "https://example.com/download-modpack-4",

        images: [
            "images/modpack4/1.jpg",
            "images/modpack4/2.jpg",
            "images/modpack4/3.jpg"
        ]
    },


    {
        number: "MODPACK 05",

        title: "18TH MODPACK",

        description:
            "Optimized RAGE:MP modpack with a clean and modern visual style.",

        download:
            "https://example.com/download-modpack-5",

        images: [
            "images/modpack5/1.jpg",
            "images/modpack5/2.jpg",
            "images/modpack5/3.jpg"
        ]
    },


    {
        number: "MODPACK 06",

        title: "18TH MODPACK",

        description:
            "Premium RAGE:MP modpack for players looking for a fresh experience.",

        download:
            "https://example.com/download-modpack-6",

        images: [
            "images/modpack6/1.jpg",
            "images/modpack6/2.jpg",
            "images/modpack6/3.jpg"
        ]
    }

];


/* ==========================================
   CURRENT GALLERY
========================================== */

let currentModpack = 0;

let currentImage = 0;


/* ==========================================
   ELEMENTS
========================================== */

const modal =
    document.getElementById("modpackModal");

const galleryImage =
    document.getElementById("galleryImage");

const imageNumber =
    document.getElementById("imageNumber");

const imageTotal =
    document.getElementById("imageTotal");

const modalNumber =
    document.getElementById("modalNumber");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const downloadButton =
    document.getElementById("downloadButton");


/* ==========================================
   OPEN MODPACK
========================================== */

function openModpack(index) {

    currentModpack = index;

    currentImage = 0;

    const modpack =
        modpacks[currentModpack];


    modalNumber.textContent =
        modpack.number;


    modalTitle.textContent =
        modpack.title;


    modalDescription.textContent =
        modpack.description;


    downloadButton.href =
        modpack.download;


    imageTotal.textContent =
        modpack.images.length;


    updateGallery();


    modal.classList.add("active");


    document.body.style.overflow =
        "hidden";
}


/* ==========================================
   CLOSE MODPACK
========================================== */

function closeModpack() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";
}


/* ==========================================
   UPDATE IMAGE
========================================== */

function updateGallery() {

    const modpack =
        modpacks[currentModpack];


    galleryImage.src =
        modpack.images[currentImage];


    imageNumber.textContent =
        currentImage + 1;


    imageTotal.textContent =
        modpack.images.length;
}


/* ==========================================
   NEXT IMAGE
========================================== */

function nextImage() {

    const modpack =
        modpacks[currentModpack];


    currentImage++;


    if (
        currentImage >=
        modpack.images.length
    ) {

        currentImage = 0;

    }


    updateGallery();
}


/* ==========================================
   PREVIOUS IMAGE
========================================== */

function previousImage() {

    const modpack =
        modpacks[currentModpack];


    currentImage--;


    if (currentImage < 0) {

        currentImage =
            modpack.images.length - 1;

    }


    updateGallery();
}


/* ==========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================== */

modal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === modal
        ) {

            closeModpack();

        }

    }
);


/* ==========================================
   ESC KEY
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeModpack();

        }


        if (
            modal.classList.contains("active")
        ) {

            if (
                event.key === "ArrowRight"
            ) {

                nextImage();

            }


            if (
                event.key === "ArrowLeft"
            ) {

                previousImage();

            }

        }

    }
);
