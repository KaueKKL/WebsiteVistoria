"use strict";

document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       1. MENU MOBILE (HAMBURGER)
       ========================================== */
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Abrir/Fechar menu ao clicar no botão
    mobileBtn.addEventListener("click", () => {
        const isExpanded = mobileBtn.getAttribute("aria-expanded") === "true";
        mobileBtn.setAttribute("aria-expanded", !isExpanded);
        navMenu.classList.toggle("active");
    });

    // Fechar menu ao clicar em um link interno
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileBtn.setAttribute("aria-expanded", "false");
            navMenu.classList.remove("active");
        });
    });

    /* ==========================================
       2. EFEITO DE SCROLL NO HEADER
       ========================================== */
    const header = document.getElementById("main-header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });

    /* ==========================================
       3. INTEGRAÇÃO SIMULADA DO WHATSAPP
       ========================================== */
    const WHATSAPP_NUMBER = "5500000000000"; // Substitua pelo número real
    const btnWhatsapp = document.getElementById("btn-whatsapp");

    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", (e) => {
            e.preventDefault();
            const message = encodeURIComponent("Olá! Gostaria de solicitar informações sobre uma vistoria imobiliária.");
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    /* ==========================================
       4. VALIDAÇÃO E FEEDBACK DO FORMULÁRIO (FRONTEND)
       ========================================== */
    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Impede o envio real para recarregar a página
            
            // Aqui futuramente entrará a chamada fetch() para sua API/Backend
            
            // Simula sucesso visualmente
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.textContent = "Enviando...";
            submitBtn.disabled = true;

            setTimeout(() => {
                formFeedback.style.display = "block";
                submitBtn.textContent = "Solicitar contato";
                submitBtn.disabled = false;
                contactForm.reset(); // Limpa os campos
                
                // Oculta a mensagem após 5 segundos
                setTimeout(() => {
                    formFeedback.style.display = "none";
                }, 5000);
            }, 1000);
        });
    }
});