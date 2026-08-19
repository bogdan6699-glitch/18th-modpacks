@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    background: #080808;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 7%;

    background: rgba(5, 5, 5, 0.85);
    backdrop-filter: blur(15px);

    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    z-index: 1000;
}


.logo {
    display: flex;
    flex-direction: column;
}


.logo span {
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 3px;
}


.logo small {
    font-size: 8px;
    letter-spacing: 2px;
    color: #888;
}


.navbar nav {
    display: flex;
    gap: 35px;
}


.navbar nav a {
    color: #aaa;
    text-decoration: none;

    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;

    transition: 0.3s;
}


.navbar nav a:hover {
    color: #ffffff;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding: 120px 8%;

    position: relative;

    background:
        linear-gradient(
            90deg,
            rgba(0,0,0,0.95),
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.2)
        ),
        url("images/hero.jpg");

    background-size: cover;
    background-position: center;
}


.hero::after {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 180px;

    background: linear-gradient(
        transparent,
        #080808
    );
}


.hero-content {
    position: relative;
    z-index: 2;

    max-width: 700px;
}


.hero-small {
    color: #888;

    font-size: 12px;
    font-weight: 800;

    letter-spacing: 5px;

    margin-bottom: 20px;
}


.hero h1 {
    font-size: clamp(55px, 8vw, 110px);

    line-height: 0.9;

    font-weight: 900;

    letter-spacing: -5px;
}


.hero h1 span {
    color: #777;
}


.hero-description {
    color: #aaa;

    max-width: 550px;

    margin-top: 30px;

    line-height: 1.7;

    font-size: 14px;
}


.hero-button {
    display: inline-block;

    margin-top: 35px;

    padding: 16px 28px;

    background: #ffffff;
    color: #000000;

    text-decoration: none;

    font-size: 12px;
    font-weight: 800;

    letter-spacing: 1px;

    transition: 0.3s;
}


.hero-button:hover {
    background: #aaa;
    transform: translateY(-3px);
}


/* =========================
   SECTION
========================= */

.modpacks-section {
    padding: 100px 7% 130px;
}


.section-title {
    margin-bottom: 60px;
}


.section-title p {
    color: #777;

    font-size: 10px;
    font-weight: 800;

    letter-spacing: 4px;

    margin-bottom: 10px;
}


.section-title h2 {
    font-size: 50px;
    font-weight: 900;
    letter-spacing: -2px;
}


.section-title span {
    display: block;

    width: 60px;
    height: 3px;

    background: #fff;

    margin-top: 20px;
}


/* =========================
   MODPACK GRID
========================= */

.modpacks-grid {
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 30px;
}


.modpack-card {
    background: #111;

    border: 1px solid rgba(255,255,255,0.07);

    overflow: hidden;

    transition: 0.4s;
}


.modpack-card:hover {
    transform: translateY(-8px);

    border-color:
        rgba(255,255,255,0.2);
}


.modpack-image {
    position: relative;

    height: 350px;

    overflow: hidden;
}


.modpack-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: 0.5s;
}


.modpack-card:hover
.modpack-image img {
    transform: scale(1.06);
}


.image-overlay {
    position: absolute;

    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        rgba(0,0,0,0.65);

    opacity: 0;

    transition: 0.3s;
}


.modpack-card:hover
.image-overlay {
    opacity: 1;
}


.view-button {
    border: 1px solid #fff;

    background: transparent;

    color: #fff;

    padding: 14px 24px;

    font-size: 11px;
    font-weight: 800;

    letter-spacing: 1px;

    cursor: pointer;

    transition: 0.3s;
}


.view-button:hover {
    background: #fff;
    color: #000;
}


.modpack-info {
    padding: 24px;

    display: flex;

    justify-content: space-between;
    align-items: center;
}


.modpack-number {
    color: #666;

    font-size: 9px;
    font-weight: 800;

    letter-spacing: 3px;

    margin-bottom: 7px;
}


.modpack-info h3 {
    font-size: 18px;
    font-weight: 800;
}


.arrow-button {
    width: 45px;
    height: 45px;

    border: 1px solid #333;

    background: transparent;

    color: white;

    font-size: 20px;

    cursor: pointer;

    transition: 0.3s;
}


.arrow-button:hover {
    background: #fff;
    color: #000;
}


/* =========================
   MODAL
========================= */

.modal {
    position: fixed;

    inset: 0;

    background: rgba(0,0,0,0.9);

    backdrop-filter: blur(12px);

    display: none;

    align-items: center;
    justify-content: center;

    padding: 30px;

    z-index: 2000;
}


.modal.active {
    display: flex;
}


.modal-content {
    width: min(1100px, 100%);

    max-height: 95vh;

    overflow-y: auto;

    background: #0e0e0e;

    border: 1px solid #2a2a2a;

    position: relative;

    animation: modalIn 0.3s ease;
}


@keyframes modalIn {

    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }

}


.close-modal {
    position: absolute;

    top: 15px;
    right: 15px;

    width: 45px;
    height: 45px;

    background: rgba(0,0,0,0.7);

    border: 1px solid #444;

    color: white;

    font-size: 28px;

    cursor: pointer;

    z-index: 10;
}


.close-modal:hover {
    background: white;
    color: black;
}


/* =========================
   GALLERY
========================= */

.modal-gallery {
    height: 550px;

    background: #050505;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
}


.modal-gallery img {
    width: 100%;
    height: 100%;

    object-fit: contain;
}


.gallery-arrow {
    position: absolute;

    top: 50%;

    transform: translateY(-50%);

    width: 55px;
    height: 55px;

    border-radius: 50%;

    border: 1px solid #444;

    background: rgba(0,0,0,0.8);

    color: white;

    font-size: 35px;

    cursor: pointer;

    z-index: 5;

    transition: 0.3s;
}


.gallery-arrow:hover {
    background: white;
    color: black;
}


.gallery-arrow.left {
    left: 20px;
}


.gallery-arrow.right {
    right: 20px;
}


.gallery-counter {
    text-align: center;

    color: #777;

    font-size: 11px;

    letter-spacing: 2px;

    padding-top: 15px;
}


/* =========================
   MODAL INFO
========================= */

.modal-info {
    padding: 35px;
}


.modal-number {
    color: #666;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 4px;

    margin-bottom: 10px;
}


.modal-info h2 {
    font-size: 35px;

    font-weight: 900;

    margin-bottom: 15px;
}


.modal-info > p:not(.modal-number) {
    color: #888;

    font-size: 14px;

    line-height: 1.7;

    max-width: 700px;

    margin-bottom: 25px;
}


.download-button {
    display: inline-block;

    background: #fff;

    color: #000;

    text-decoration: none;

    padding: 16px 25px;

    font-size: 11px;

    font-weight: 900;

    letter-spacing: 1px;

    transition: 0.3s;
}


.download-button:hover {
    background: #aaa;
}


/* =========================
   FOOTER
========================= */

footer {
    border-top: 1px solid #1d1d1d;

    padding: 60px 7%;

    text-align: center;
}


.footer-logo {
    font-size: 35px;

    font-weight: 900;

    letter-spacing: 5px;
}


footer p {
    color: #666;

    font-size: 9px;

    letter-spacing: 3px;

    margin-top: 8px;
}


footer span {
    display: block;

    color: #444;

    font-size: 10px;

    margin-top: 30px;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

    .navbar {
        padding: 0 5%;
    }


    .navbar nav {
        gap: 15px;
    }


    .navbar nav a {
        font-size: 9px;
    }


    .hero {
        padding: 120px 6%;
    }


    .hero h1 {
        letter-spacing: -3px;
    }


    .modpacks-section {
        padding: 80px 5%;
    }


    .modpacks-grid {
        grid-template-columns: 1fr;
    }


    .modpack-image {
        height: 260px;
    }


    .modal {
        padding: 10px;
    }


    .modal-gallery {
        height: 350px;
    }


    .modal-info {
        padding: 25px;
    }


    .modal-info h2 {
        font-size: 27px;
    }

}


@media (max-width: 500px) {

    .navbar nav {
        display: none;
    }


    .hero h1 {
        font-size: 52px;
    }


    .hero-description {
        font-size: 13px;
    }


    .section-title h2 {
        font-size: 40px;
    }


    .modal-gallery {
        height: 280px;
    }


    .gallery-arrow {
        width: 42px;
        height: 42px;

        font-size: 25px;
    }

}
