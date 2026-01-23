// ===================================
// PAQUETES PREMIUM - SELECCIÓN DE TOURS
// ===================================

// Variables globales para el modal de tours
let currentPackageType = '';
let maxToursAllowed = 0;
let selectedTours = [];

// Obtener elementos del DOM
const toursModal = document.getElementById('toursModal');
const toursModalSubtitle = document.getElementById('toursModalSubtitle');
const toursCounter = document.getElementById('toursCounter');
const confirmToursBtn = document.getElementById('confirmToursBtn');
const tourCheckboxes = document.querySelectorAll('.tour-option input[type="checkbox"]');
const selectToursButtons = document.querySelectorAll('.btn-select-tours');
const quoteButtons = document.querySelectorAll('.btn-quote');

// Abrir modal de selección de tours
selectToursButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentPackageType = button.getAttribute('data-package-type');
        maxToursAllowed = parseInt(button.getAttribute('data-max-tours'));
        
        // Actualizar subtítulo del modal
        const currentLang = document.documentElement.lang || 'es';
        const packageNames = {
            es: {
                signature: 'Creel Signature',
                select: 'Creel Select',
                prime: 'Creel Prime'
            },
            en: {
                signature: 'Creel Signature',
                select: 'Creel Select',
                prime: 'Creel Prime'
            }
        };
        
        const selectText = currentLang === 'es' 
            ? `Selecciona hasta ${maxToursAllowed} ${maxToursAllowed === 1 ? 'tour' : 'tours'} para ${packageNames[currentLang][currentPackageType]}`
            : `Select up to ${maxToursAllowed} ${maxToursAllowed === 1 ? 'tour' : 'tours'} for ${packageNames[currentLang][currentPackageType]}`;
        
        toursModalSubtitle.textContent = selectText;
        
        // Resetear selección
        selectedTours = [];
        tourCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        updateToursCounter();
        openModal(toursModal);
    });
});

// Manejar selección de tours
tourCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const tourValue = e.target.value;
        
        if (e.target.checked) {
            // Verificar si ya alcanzó el máximo
            if (selectedTours.length >= maxToursAllowed) {
                e.target.checked = false;
                return;
            }
            selectedTours.push(tourValue);
        } else {
            selectedTours = selectedTours.filter(tour => tour !== tourValue);
        }
        
        updateToursCounter();
    });
});

// Actualizar contador de tours
function updateToursCounter() {
    const currentLang = document.documentElement.lang || 'es';
    const remaining = maxToursAllowed - selectedTours.length;
    
    if (currentLang === 'es') {
        if (selectedTours.length === 0) {
            toursCounter.textContent = `Selecciona ${maxToursAllowed} ${maxToursAllowed === 1 ? 'tour' : 'tours'}`;
            toursCounter.classList.remove('error');
        } else if (selectedTours.length < maxToursAllowed) {
            toursCounter.textContent = `${selectedTours.length} de ${maxToursAllowed} ${maxToursAllowed === 1 ? 'tour seleccionado' : 'tours seleccionados'}. Puedes elegir ${remaining} más.`;
            toursCounter.classList.remove('error');
        } else {
            toursCounter.textContent = `✓ ${selectedTours.length} ${selectedTours.length === 1 ? 'tour seleccionado' : 'tours seleccionados'}`;
            toursCounter.classList.remove('error');
        }
    } else {
        if (selectedTours.length === 0) {
            toursCounter.textContent = `Select ${maxToursAllowed} ${maxToursAllowed === 1 ? 'tour' : 'tours'}`;
            toursCounter.classList.remove('error');
        } else if (selectedTours.length < maxToursAllowed) {
            toursCounter.textContent = `${selectedTours.length} of ${maxToursAllowed} ${maxToursAllowed === 1 ? 'tour selected' : 'tours selected'}. You can choose ${remaining} more.`;
            toursCounter.classList.remove('error');
        } else {
            toursCounter.textContent = `✓ ${selectedTours.length} ${selectedTours.length === 1 ? 'tour selected' : 'tours selected'}`;
            toursCounter.classList.remove('error');
        }
    }
}

// Confirmar selección de tours
confirmToursBtn.addEventListener('click', () => {
    if (selectedTours.length === 0) {
        const currentLang = document.documentElement.lang || 'es';
        toursCounter.textContent = currentLang === 'es' 
            ? 'Por favor selecciona al menos un tour'
            : 'Please select at least one tour';
        toursCounter.classList.add('error');
        return;
    }
    
    // Cerrar modal
    closeModal(toursModal);
    
    // Scroll al formulario de cotización
    setTimeout(() => {
        const cotizacionSection = document.getElementById('cotizacion');
        if (cotizacionSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = cotizacionSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Opcional: pre-llenar el mensaje con la selección
            const mensajeTextarea = document.getElementById('mensaje');
            if (mensajeTextarea) {
                const currentLang = document.documentElement.lang || 'es';
                const packageNames = {
                    es: {
                        signature: 'Creel Signature (3 días / 2 noches)',
                        select: 'Creel Select (4 días / 3 noches)',
                        prime: 'Creel Prime (5 días / 4 noches)'
                    },
                    en: {
                        signature: 'Creel Signature (3 days / 2 nights)',
                        select: 'Creel Select (4 days / 3 nights)',
                        prime: 'Creel Prime (5 days / 4 nights)'
                    }
                };
                
                const tourNames = {
                    es: {
                        barrancas: 'Barrancas del Cobre',
                        tarahumara: 'Tarahumara Plus + Cusarare',
                        basaseachi: 'Basaseachi',
                        maguarichi: 'Maguarichi'
                    },
                    en: {
                        barrancas: 'Copper Canyon',
                        tarahumara: 'Tarahumara Plus + Cusarare',
                        basaseachi: 'Basaseachi',
                        maguarichi: 'Maguarichi'
                    }
                };
                
                const selectedTourNames = selectedTours.map(tour => tourNames[currentLang][tour]).join(', ');
                
                const message = currentLang === 'es'
                    ? `Estoy interesado en el paquete ${packageNames[currentLang][currentPackageType]}.\n\nTours seleccionados:\n${selectedTourNames}\n\n`
                    : `I'm interested in the ${packageNames[currentLang][currentPackageType]} package.\n\nSelected tours:\n${selectedTourNames}\n\n`;
                
                mensajeTextarea.value = message;
                setTimeout(() => mensajeTextarea.focus(), 500);
            }
        }
    }, 300);
});

// Botones de cotización directa (sin selección de tours)
quoteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const packageType = button.getAttribute('data-package-type');
        
        // Scroll al formulario
        const cotizacionSection = document.getElementById('cotizacion');
        if (cotizacionSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = cotizacionSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Pre-llenar mensaje para paquete Bespoke
            if (packageType === 'bespoke') {
                const mensajeTextarea = document.getElementById('mensaje');
                if (mensajeTextarea) {
                    const currentLang = document.documentElement.lang || 'es';
                    const message = currentLang === 'es'
                        ? 'Estoy interesado en el paquete Creel Bespoke (100% personalizado).\n\nMe gustaría diseñar mi experiencia con:\n\n'
                        : 'I\'m interested in the Creel Bespoke package (100% customized).\n\nI would like to design my experience with:\n\n';
                    
                    mensajeTextarea.value = message;
                    setTimeout(() => mensajeTextarea.focus(), 500);
                }
            }
        }
    });
});

// Cerrar modal de tours con botón X
const toursModalClose = document.querySelector('.tours-modal-close');
if (toursModalClose) {
    toursModalClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal(toursModal);
    });
}

// Cerrar modal al hacer clic fuera
if (toursModal) {
    toursModal.addEventListener('click', (e) => {
        if (e.target === toursModal) {
            closeModal(toursModal);
        }
    });
}

// ===================================
// ACTUALIZAR TRADUCCIONES PARA PAQUETES
// ===================================

// Agregar traducciones de paquetes al objeto translations existente
if (typeof translations !== 'undefined') {
    // Español
    translations.es = {
        ...translations.es,
        // Paquetes
        'packages.title': 'Paquetes a Creel',
        'packages.subtitle': 'Experiencias curadas en la Sierra Tarahumara',
        'packages.includes': 'Incluye:',
        'packages.btn.select': 'Seleccionar tours',
        'packages.btn.quote': 'Solicitar cotización',
        'packages.btn.bespoke': 'Diseñar mi experiencia',
        
        // Creel Signature
        'packages.signature.badge': 'Esencial',
        'packages.signature.name': 'Creel Signature',
        'packages.signature.duration': '3 días / 2 noches',
        'packages.signature.desc': 'Primera experiencia en Creel, curada y sin complicaciones.',
        'packages.signature.item1': 'Hospedaje',
        'packages.signature.item2': '2 tours a elegir',
        'packages.signature.item3': 'Desayunos y cenas',
        
        // Creel Select
        'packages.select.badge': 'Recomendado',
        'packages.select.name': 'Creel Select',
        'packages.select.duration': '4 días / 3 noches',
        'packages.select.desc': 'Más días y mejores recorridos, con ritmo cómodo.',
        'packages.select.item1': 'Hospedaje',
        'packages.select.item2': '3 tours a elegir',
        'packages.select.item3': 'Desayunos y cenas',
        'packages.select.item4': 'Chepe Express – Clase Turista',
        
        // Creel Prime
        'packages.prime.badge': 'Premium',
        'packages.prime.name': 'Creel Prime',
        'packages.prime.duration': '5 días / 4 noches',
        'packages.prime.desc': 'Experiencia completa en su versión más exclusiva.',
        'packages.prime.item1': 'Hospedaje',
        'packages.prime.item2': '4 tours a elegir',
        'packages.prime.item3': 'Desayunos y cenas',
        'packages.prime.item4': 'Chepe Express – Clase Ejecutiva',
        'packages.prime.item5': '1 actividad en Barrancas del Cobre',
        
        // Creel Bespoke
        'packages.bespoke.badge': 'A medida',
        'packages.bespoke.name': 'Creel Bespoke',
        'packages.bespoke.duration': 'Personalizado',
        'packages.bespoke.desc': 'Experiencia 100% personalizada. Diseña tu viaje desde cero.',
        'packages.bespoke.customize': 'Personaliza:',
        'packages.bespoke.item1': 'Número de días y noches',
        'packages.bespoke.item2': 'Tipo de hospedaje',
        'packages.bespoke.item3': 'Número y selección de tours',
        'packages.bespoke.item4': 'Actividades especiales',
        'packages.bespoke.item5': 'Clase y tramo del Chepe Express',
        
        // Modal de Tours
        'tours.modal.title': 'Selecciona tus tours',
        'tours.modal.confirm': 'Confirmar selección',
        'tours.barrancas.name': 'Barrancas del Cobre',
        'tours.barrancas.desc': 'Vistas panorámicas impresionantes',
        'tours.tarahumara.name': 'Tarahumara Plus + Cusarare',
        'tours.tarahumara.desc': 'Cultura rarámuri y cascadas',
        'tours.basaseachi.name': 'Basaseachi',
        'tours.basaseachi.desc': 'Cascada más alta de México',
        'tours.maguarichi.name': 'Maguarichi',
        'tours.maguarichi.desc': 'Pueblo rarámuri auténtico'
    };
    
    // Inglés
    translations.en = {
        ...translations.en,
        // Packages
        'packages.title': 'Creel Packages',
        'packages.subtitle': 'Curated experiences in the Sierra Tarahumara',
        'packages.includes': 'Includes:',
        'packages.btn.select': 'Select tours',
        'packages.btn.quote': 'Request quote',
        'packages.btn.bespoke': 'Design my experience',
        
        // Creel Signature
        'packages.signature.badge': 'Essential',
        'packages.signature.name': 'Creel Signature',
        'packages.signature.duration': '3 days / 2 nights',
        'packages.signature.desc': 'First Creel experience, curated and hassle-free.',
        'packages.signature.item1': 'Accommodation',
        'packages.signature.item2': '2 tours to choose',
        'packages.signature.item3': 'Breakfasts and dinners',
        
        // Creel Select
        'packages.select.badge': 'Recommended',
        'packages.select.name': 'Creel Select',
        'packages.select.duration': '4 days / 3 nights',
        'packages.select.desc': 'More days and better tours, at a comfortable pace.',
        'packages.select.item1': 'Accommodation',
        'packages.select.item2': '3 tours to choose',
        'packages.select.item3': 'Breakfasts and dinners',
        'packages.select.item4': 'Chepe Express – Tourist Class',
        
        // Creel Prime
        'packages.prime.badge': 'Premium',
        'packages.prime.name': 'Creel Prime',
        'packages.prime.duration': '5 days / 4 nights',
        'packages.prime.desc': 'Complete experience in its most exclusive version.',
        'packages.prime.item1': 'Accommodation',
        'packages.prime.item2': '4 tours to choose',
        'packages.prime.item3': 'Breakfasts and dinners',
        'packages.prime.item4': 'Chepe Express – Executive Class',
        'packages.prime.item5': '1 activity at Copper Canyon',
        
        // Creel Bespoke
        'packages.bespoke.badge': 'Bespoke',
        'packages.bespoke.name': 'Creel Bespoke',
        'packages.bespoke.duration': 'Customized',
        'packages.bespoke.desc': '100% personalized experience. Design your trip from scratch.',
        'packages.bespoke.customize': 'Customize:',
        'packages.bespoke.item1': 'Number of days and nights',
        'packages.bespoke.item2': 'Type of accommodation',
        'packages.bespoke.item3': 'Number and selection of tours',
        'packages.bespoke.item4': 'Special activities',
        'packages.bespoke.item5': 'Chepe Express class and route',
        
        // Tours Modal
        'tours.modal.title': 'Select your tours',
        'tours.modal.confirm': 'Confirm selection',
        'tours.barrancas.name': 'Copper Canyon',
        'tours.barrancas.desc': 'Breathtaking panoramic views',
        'tours.tarahumara.name': 'Tarahumara Plus + Cusarare',
        'tours.tarahumara.desc': 'Rarámuri culture and waterfalls',
        'tours.basaseachi.name': 'Basaseachi',
        'tours.basaseachi.desc': 'Mexico\'s highest waterfall',
        'tours.maguarichi.name': 'Maguarichi',
        'tours.maguarichi.desc': 'Authentic Rarámuri village'
    };
}
