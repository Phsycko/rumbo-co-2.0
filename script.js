// ===================================
// IDIOMA (i18n)
// ===================================
const translations = {
    es: {
        // Nav
        'nav.inicio': 'Inicio',
        'nav.destinos': 'Destinos',
        'nav.cotizacion': 'Cotización',
        'nav.quienes-somos': 'Quiénes somos',
        'nav.contacto': 'Contacto',
        // Hero
        'hero.subtitle': 'No vendemos viajes.\nDiseñamos recuerdos que se quedan contigo.',
        'hero.description': '',
        'hero.cta': 'Diseñar mi experiencia',
        // Travel Types
        'travel.label': 'Cotizamos experiencias de viaje para:',
        'travel.familiares': 'Viajes familiares',
        'travel.familiares.desc': 'Para viajar en familia sin complicaciones',
        'travel.lunas-miel': 'Lunas de miel',
        'travel.lunas-miel.desc': 'Experiencias exclusivas para recién casados',
        'travel.escolares': 'Viajes escolares',
        'travel.escolares.desc': 'Viajes organizados para grupos escolares',
        'travel.corporativos': 'Viajes corporativos',
        'travel.corporativos.desc': 'Viajes de trabajo y eventos empresariales',
        'travel.individuales': 'Viajes individuales',
        'travel.individuales.desc': 'Viajes diseñados para una sola persona',
        'travel.grupos-especiales': 'Grupos especiales',
        'travel.grupos-especiales.desc': 'Viajes para grupos grandes o personalizados',
        'travel.quote': 'NO VENDEMOS VIAJES, VENDEMOS EXPERIENCIAS',
        'travel.card.cta': 'Diseñar mi experiencia',
        // Essence
        'essence.title': 'Nuestra esencia',
        'essence.mision': 'MISIÓN',
        'essence.mision.text': 'Diseñar experiencias de viaje personalizadas, seguras y memorables, cuidando cada detalle para que nuestros clientes vivan cada destino sin preocupaciones, solo disfrutando cada momento.',
        'essence.vision': 'VISIÓN',
        'essence.vision.text': 'Ser una agencia referente en la creación de experiencias de viaje bien diseñadas, humanas y confiables, donde cada viaje se convierte en recuerdos que perduran.',
        'essence.valores': 'VALORES',
        'essence.valor1': 'Atención personalizada',
        'essence.valor2': 'Transparencia y confianza',
        'essence.valor3': 'Amor por viajar',
        'essence.valor4': 'Compromiso con cada cliente',
        'essence.valor5': 'Calidad en cada experiencia',
        // Transport
        'transport.headline': '¿Ya tienes tu itinerario, pero te falta el transporte?',
        'transport.subtitle': 'Nosotros te ayudamos a completar tu viaje.',
        'transport.autobuses': 'Autobuses a tu medida',
        'transport.autobuses.desc': 'Traslados terrestres privados o grupales según tu viaje.',
        'transport.chepe-regional': 'Chepe Regional',
        'transport.chepe-regional.desc': 'El recorrido completo por la Sierra Tarahumara, con múltiples estaciones intermedias.',
        'transport.chepe-express': 'Chepe Express',
        'transport.chepe-express.desc': 'La experiencia premium del Chepe con servicios de lujo.',
        // Destinations
        'destinations.title': 'Destinos destacados',
        'destinations.pueblos': 'Pueblos Mágicos',
        'destinations.playas': 'Playas',
        // Custom Destination
        'custom.title': '¿Quieres viajar a otro lugar?',
        'custom.description': '¿Tienes otro destino en mente? Lo diseñamos juntos para que vivas cada momento sin preocupaciones.',
        'custom.nombre': 'Nombre completo',
        'custom.telefono': 'Número de teléfono',
        'custom.email': 'Correo electrónico',
        'custom.personas': 'Número de personas',
        'custom.fecha-inicio': 'Fecha de inicio',
        'custom.fecha-fin': 'Fecha de regreso',
        'custom.mensaje': '¿A dónde te gustaría viajar y qué tipo de experiencia buscas? (tours, hospedaje, experiencias, viajes familiares, etc.)',
        'custom.submit': 'Enviar solicitud',
        // Confidence
        'confidence.title': 'Viaja con confianza',
        'confidence.text': 'Gestión completa de principio a fin.',
        // About
        'about.title': 'Quiénes somos',
        'about.text': 'Somos una agencia de viajes dedicada a crear experiencias únicas, pensadas para cada persona, familia o grupo. En Rumbo Co. creemos que los mejores recuerdos nacen cuando cada detalle está cuidado, para que tú solo te ocupes de disfrutar.',
        // Reviews
        'reviews.title': 'Lo que dicen nuestros viajeros',
        // Footer
        'footer.tagline': 'Diseñamos experiencias de viaje a tu medida',
        'footer.navegacion': 'Navegación',
        'footer.contacto': 'Contacto',
        'footer.contacto.desc': 'Contáctanos para diseñar tu próxima experiencia de viaje',
        'footer.copyright': '2024 Rumbo Co. Todos los derechos reservados.',
        // Modals - Categories
        'modal.close': 'Cerrar',
        'modal.familiares.title': 'Viajes familiares',
        'modal.familiares.desc': 'Diseñamos experiencias perfectas para toda la familia, donde cada miembro encuentre algo especial. Creamos recuerdos que se quedan contigo, con momentos adaptados a todas las edades y necesidades.',
        'modal.familiares.list': 'Lo que podemos organizar:',
        'modal.familiares.item1': 'Hospedaje familiar con todas las comodidades',
        'modal.familiares.item2': 'Actividades para niños, jóvenes y adultos',
        'modal.familiares.item3': 'Planeación de itinerarios flexibles',
        'modal.familiares.item4': 'Experiencias educativas y recreativas',
        'modal.familiares.item5': 'Traslados seguros y cómodos',
        'modal.familiares.item6': 'Asesoría personalizada para tu familia',
        'modal.lunas-miel.title': 'Lunas de miel',
        'modal.lunas-miel.desc': 'Creamos experiencias románticas e inolvidables para celebrar el inicio de su vida juntos. Cada detalle está pensado para que vivan momentos únicos y especiales que recordarán siempre.',
        'modal.lunas-miel.item1': 'Hoteles boutique y resorts exclusivos',
        'modal.lunas-miel.item2': 'Experiencias románticas y privadas',
        'modal.lunas-miel.item3': 'Cenas especiales y momentos únicos',
        'modal.lunas-miel.item4': 'Actividades para parejas',
        'modal.lunas-miel.item5': 'Traslados privados y discretos',
        'modal.lunas-miel.item6': 'Asesoría para crear el viaje perfecto',
        'modal.lunas-miel.fixed': 'Viaje para 2 personas',
        'modal.escolares.title': 'Viajes escolares',
        'modal.escolares.desc': 'Diseñamos viajes educativos seguros y enriquecedores que combinan aprendizaje con diversión. Creamos experiencias que complementan la formación académica mientras los estudiantes descubren y disfrutan.',
        'modal.escolares.item1': 'Hospedaje seguro y adecuado para grupos',
        'modal.escolares.item2': 'Actividades educativas y culturales',
        'modal.escolares.item3': 'Visitas a museos, sitios históricos y naturales',
        'modal.escolares.item4': 'Transporte grupal confiable',
        'modal.escolares.item5': 'Supervisión y acompañamiento durante el viaje',
        'modal.escolares.item6': 'Coordinación con instituciones educativas',
        'modal.corporativos.title': 'Viajes corporativos',
        'modal.corporativos.desc': 'Diseñamos viajes de negocios y eventos corporativos con profesionalismo y eficiencia. Nos encargamos de todos los detalles para que su equipo se enfoque en lo importante, mientras disfrutan de una experiencia fluida.',
        'modal.corporativos.item1': 'Hospedaje en hoteles de negocios',
        'modal.corporativos.item2': 'Organización de eventos y conferencias',
        'modal.corporativos.item3': 'Traslados corporativos y logística',
        'modal.corporativos.item4': 'Actividades de team building',
        'modal.corporativos.item5': 'Gestión de grupos empresariales',
        'modal.corporativos.item6': 'Asesoría para viajes ejecutivos',
        'modal.individuales.title': 'Viajes individuales',
        'modal.individuales.desc': 'Diseñamos experiencias personalizadas para viajeros independientes que buscan libertad y autenticidad. Cada viaje se adapta a tus intereses, ritmo y preferencias únicas, para que descubras a tu manera.',
        'modal.individuales.item1': 'Hospedaje según tus preferencias',
        'modal.individuales.item2': 'Itinerarios flexibles y personalizados',
        'modal.individuales.item3': 'Experiencias auténticas y locales',
        'modal.individuales.item4': 'Traslados individuales',
        'modal.individuales.item5': 'Recomendaciones personalizadas',
        'modal.individuales.item6': 'Asesoría para viajeros independientes',
        'modal.individuales.fixed': 'Viaje para 1 persona',
        'modal.grupos-especiales.title': 'Grupos especiales',
        'modal.grupos-especiales.desc': 'Organizamos viajes para grupos con necesidades específicas, adaptándonos a cada situación. Ya sea un grupo de amigos, adultos mayores, o grupos con requerimientos particulares, creamos la experiencia perfecta.',
        'modal.grupos-especiales.item1': 'Hospedaje adaptado a necesidades del grupo',
        'modal.grupos-especiales.item2': 'Actividades diseñadas para el grupo',
        'modal.grupos-especiales.item3': 'Itinerarios personalizados',
        'modal.grupos-especiales.item4': 'Transporte grupal cómodo',
        'modal.grupos-especiales.item5': 'Acompañamiento y asistencia',
        'modal.grupos-especiales.item6': 'Asesoría especializada para grupos',
        // Modal Forms
        'form.personas': 'Número de personas',
        'form.dias': 'Número de días',
        'form.escuela': 'Nombre de la escuela o grupo',
        'form.cotizar': '¿Qué experiencia desean vivir?',
        'form.hospedaje': 'Hospedaje',
        'form.tours': 'Tours / actividades',
        'form.tren': 'Tren (si aplica)',
        'form.traslado': 'Traslado terrestre',
        'form.romanticas': 'Experiencias románticas',
        'form.personalizadas': 'Experiencias personalizadas',
        'form.submit': 'Diseñar mi experiencia',
        'form.quote.title': 'Diseña tu experiencia',
        // Transport Modals
        'transport.autobuses.title': 'Autobuses a tu medida',
        'transport.autobuses.desc': 'Ofrecemos traslados terrestres personalizados, ya sea para grupos grandes o servicios privados. Nos encargamos de coordinar el transporte que mejor se adapte a tu itinerario y necesidades.',
        'transport.autobuses.salida': 'Ciudad de salida',
        'transport.autobuses.destino': 'Ciudad de destino',
        'transport.autobuses.servicio': 'Tipo de servicio',
        'transport.autobuses.servicio.select': 'Selecciona una opción',
        'transport.autobuses.servicio.privado': 'Privado',
        'transport.autobuses.servicio.grupal': 'Grupal',
        'transport.autobuses.submit': 'Solicitar cotización',
        'transport.chepe-regional.title': 'Chepe Regional',
        'transport.chepe-regional.desc': 'Selecciona tu estación de salida y destino.',
        'transport.chepe-regional.salida': 'Estación de salida',
        'transport.chepe-regional.destino': 'Estación de destino',
        'transport.chepe-regional.select': 'Selecciona una estación',
        'transport.chepe-regional.clase': 'Clase',
        'transport.chepe-regional.clase.turista': 'Turista',
        'transport.chepe-regional.clase.primera': 'Primera',
        'transport.chepe-regional.fecha-salida': 'Fecha de salida',
        'transport.chepe-regional.fecha-regreso': 'Fecha de regreso',
        'transport.chepe-regional.temporada.alta': 'Temporada alta',
        'transport.chepe-regional.temporada.baja': 'Temporada baja',
        'transport.chepe-regional.submit': 'Solicitar disponibilidad',
        'transport.chepe-express.title': 'Chepe Express',
        'transport.chepe-express.desc': 'El Chepe Express ofrece la experiencia premium del Chepe, con servicios de lujo y comodidades excepcionales mientras recorres la Sierra Tarahumara.',
        'transport.chepe-express.route': 'Recorrido Chepe Express',
        'transport.chepe-express.salida': 'Estación de salida',
        'transport.chepe-express.destino': 'Estación de destino',
        'transport.chepe-express.nota': 'ℹ️ La disponibilidad depende del sentido del recorrido.',
        'transport.chepe-express.clase.ejecutiva': 'Ejecutiva',
        'transport.chepe-express.fecha': 'Fecha de viaje',
        'transport.chepe-express.submit': 'Solicitar disponibilidad',
        // Destination Modals
        'dest.creel.title': 'CREEL, CHIHUAHUA',
        'dest.creel.desc': 'Creel es la puerta de entrada a la Sierra Tarahumara, un destino donde la naturaleza, la cultura rarámuri y la aventura se encuentran. Ideal para quienes buscan paisajes imponentes, tranquilidad y experiencias auténticas.',
        'dest.creel.exp': 'Experiencias destacadas:',
        'dest.creel.exp1': 'Tour por la Sierra Tarahumara',
        'dest.creel.exp2': 'Visita a Barrancas del Cobre',
        'dest.creel.exp3': 'Recorrido por Valle de los Monjes',
        'dest.creel.exp4': 'Lago de Arareko',
        'dest.creel.exp5': 'Paseo en el tren Chepe',
        'dest.creel.exp6': 'Experiencias culturales y gastronómicas locales',
        'dest.sancristobal.title': 'SAN CRISTÓBAL DE LAS CASAS',
        'dest.sancristobal.desc': 'Una ciudad colonial mágica enclavada en las montañas de Chiapas, donde la tradición indígena se mezcla con el ambiente bohemio. Sus calles coloridas, mercados artesanales y entorno natural la convierten en un destino único para los amantes de la cultura y la naturaleza.',
        'dest.sancristobal.exp1': 'Recorrido por el centro histórico colonial',
        'dest.sancristobal.exp2': 'Visita a comunidades indígenas tzotziles y tzeltales',
        'dest.sancristobal.exp3': 'Mercados artesanales y gastronomía local',
        'dest.sancristobal.exp4': 'Excursión a los Altos de Chiapas',
        'dest.sancristobal.exp5': 'Tour por las iglesias y arquitectura colonial',
        'dest.sancristobal.exp6': 'Experiencias de ecoturismo en la región',
        'dest.parras.title': 'PARRAS DE LA FUENTE',
        'dest.parras.desc': 'El primer pueblo mágico de Coahuila, cuna de la vitivinicultura en América. Parras combina historia, tradición vinícola y paisajes desérticos únicos. Un destino perfecto para los amantes del vino, la historia y la tranquilidad de los pequeños pueblos mexicanos.',
        'dest.parras.exp1': 'Tour por viñedos y bodegas históricas',
        'dest.parras.exp2': 'Catas de vino y experiencias enológicas',
        'dest.parras.exp3': 'Recorrido por el centro histórico',
        'dest.parras.exp4': 'Visita a la Hacienda de Perote',
        'dest.parras.exp5': 'Exploración de cuevas y formaciones naturales',
        'dest.parras.exp6': 'Gastronomía regional y productos locales',
        'dest.cancun.title': 'CANCÚN',
        'dest.cancun.desc': 'El paraíso del Caribe mexicano, donde el mar turquesa se encuentra con la arena blanca. Cancún ofrece una combinación perfecta de playas espectaculares, vida nocturna vibrante, cultura maya y aventuras acuáticas. Un destino que tiene algo para cada viajero.',
        'dest.cancun.exp1': 'Relajación en playas paradisíacas',
        'dest.cancun.exp2': 'Snorkel y buceo en arrecifes de coral',
        'dest.cancun.exp3': 'Tour a Chichén Itzá y ruinas mayas',
        'dest.cancun.exp4': 'Paseos en catamarán y actividades acuáticas',
        'dest.cancun.exp5': 'Experiencias gastronómicas de primer nivel',
        'dest.cancun.exp6': 'Vida nocturna y entretenimiento',
        'dest.mazatlan.title': 'MAZATLÁN',
        'dest.mazatlan.desc': 'La Perla del Pacífico, una ciudad costera que combina tradición, modernidad y naturaleza. Con su malecón más largo de Latinoamérica, playas espectaculares y un centro histórico lleno de vida, Mazatlán ofrece autenticidad y diversión en un solo destino.',
        'dest.mazatlan.exp1': 'Playas y actividades acuáticas',
        'dest.mazatlan.exp2': 'Recorrido por el centro histórico y la zona dorada',
        'dest.mazatlan.exp3': 'Avistamiento de ballenas (temporada)',
        'dest.mazatlan.exp4': 'Gastronomía de mariscos y pescados frescos',
        'dest.mazatlan.exp5': 'Isla de la Piedra y paseos en lancha',
        'dest.mazatlan.exp6': 'Vida nocturna y entretenimiento familiar',
        'dest.tulum.title': 'TULUM',
        'dest.tulum.desc': 'Un destino bohemio y ecológico donde las ruinas mayas se alzan frente al mar Caribe. Tulum es sinónimo de tranquilidad, bienestar y conexión con la naturaleza. Perfecto para quienes buscan una experiencia más íntima y auténtica en la Riviera Maya.',
        'dest.tulum.exp1': 'Visita a las ruinas mayas frente al mar',
        'dest.tulum.exp2': 'Playas vírgenes y cenotes naturales',
        'dest.tulum.exp3': 'Hoteles boutique y experiencias de bienestar',
        'dest.tulum.exp4': 'Snorkel en la Gran Barrera de Coral Mesoamericana',
        'dest.tulum.exp5': 'Gastronomía orgánica y restaurantes de autor',
        'dest.tulum.exp6': 'Experiencias eco-turísticas y sostenibles',
        'dest.cta': 'Diseñar mi experiencia',
        // Common
        'common.select': 'Selecciona una opción',
        'common.dias-disponibles': 'Días disponibles:'
    },
    en: {
        // Nav
        'nav.inicio': 'Home',
        'nav.destinos': 'Destinations',
        'nav.cotizacion': 'Quote',
        'nav.quienes-somos': 'About Us',
        'nav.contacto': 'Contact',
        // Hero
        'hero.subtitle': 'Well-planned travel is twice as enjoyable',
        'hero.description': 'We design travel experiences tailored to you so you can just enjoy. We take care of planning, accommodation, and experiences.',
        'hero.cta': 'Request a quote',
        // Travel Types
        'travel.label': 'We quote travel experiences for:',
        'travel.familiares': 'Family trips',
        'travel.familiares.desc': 'Travel with family without complications',
        'travel.lunas-miel': 'Honeymoons',
        'travel.lunas-miel.desc': 'Exclusive experiences for newlyweds',
        'travel.escolares': 'School trips',
        'travel.escolares.desc': 'Organized trips for school groups',
        'travel.corporativos': 'Corporate trips',
        'travel.corporativos.desc': 'Business trips and corporate events',
        'travel.individuales': 'Individual trips',
        'travel.individuales.desc': 'Trips designed for a single person',
        'travel.grupos-especiales': 'Special groups',
        'travel.grupos-especiales.desc': 'Trips for large or customized groups',
        'travel.quote': 'WE DON\'T SELL TRIPS, WE SELL EXPERIENCES',
        'travel.card.cta': 'Quote this trip',
        // Essence
        'essence.title': 'Our essence',
        'essence.mision': 'MISSION',
        'essence.mision.text': 'Design personalized, safe, and memorable travel experiences, taking care of every detail so our clients can enjoy each destination without worries.',
        'essence.vision': 'VISION',
        'essence.vision.text': 'To be a leading agency in creating well-planned, human, and reliable travel experiences.',
        'essence.valores': 'VALUES',
        'essence.valor1': 'Personalized attention',
        'essence.valor2': 'Transparency and trust',
        'essence.valor3': 'Love for travel',
        'essence.valor4': 'Commitment to each client',
        'essence.valor5': 'Quality in every experience',
        // Transport
        'transport.headline': 'Do you already have your itinerary, but need transportation?',
        'transport.subtitle': 'We help you complete your trip.',
        'transport.autobuses': 'Buses tailored to you',
        'transport.autobuses.desc': 'Private or group ground transfers according to your trip.',
        'transport.chepe-regional': 'Chepe Regional',
        'transport.chepe-regional.desc': 'The complete journey through the Sierra Tarahumara, with multiple intermediate stations.',
        'transport.chepe-express': 'Chepe Express',
        'transport.chepe-express.desc': 'The premium Chepe experience with luxury services.',
        // Destinations
        'destinations.title': 'Featured destinations',
        'destinations.pueblos': 'Magic Towns',
        'destinations.playas': 'Beaches',
        // Custom Destination
        'custom.title': 'Want to travel somewhere else?',
        'custom.description': 'Do you have another destination in mind? We plan it with you.',
        'custom.nombre': 'Full name',
        'custom.telefono': 'Phone number',
        'custom.email': 'Email',
        'custom.personas': 'Number of people',
        'custom.fecha-inicio': 'Start date',
        'custom.fecha-fin': 'Return date',
        'custom.mensaje': 'Where would you like to travel and what type of experience are you looking for? (tours, accommodation, experiences, family trips, etc.)',
        'custom.submit': 'Send request',
        // Confidence
        'confidence.title': 'Travel with confidence',
        'confidence.planning': 'Complete trip planning',
        'confidence.planning.desc': 'We design every detail of your experience',
        'confidence.hotel': 'Accommodation selection',
        'confidence.hotel.desc': 'Carefully selected hotels',
        'confidence.tours': 'Tour and experience organization',
        'confidence.tours.desc': 'Unique activities for each destination',
        'confidence.transport': 'Ground transfers',
        'confidence.transport.desc': 'Safe and reliable transportation',
        'confidence.accompaniment': 'Support before and during the trip',
        'confidence.accompaniment.desc': 'We are with you every step of the way',
        'confidence.attention': 'Human and direct attention',
        'confidence.attention.desc': 'Personalized and close communication',
        // About
        'about.title': 'About Us',
        'about.text': 'We are a travel agency dedicated to creating unique experiences, designed for each person, family, or group. At Rumbo Co. we believe that a great trip begins with excellent planning.',
        // Reviews
        'reviews.title': 'What our travelers say',
        // Footer
        'footer.tagline': 'We design travel experiences tailored to you',
        'footer.navegacion': 'Navigation',
        'footer.contacto': 'Contact',
        'footer.contacto.desc': 'Contact us to design your next travel experience',
        'footer.copyright': '2024 Rumbo Co. All rights reserved.',
        // Modals - Categories
        'modal.close': 'Close',
        'modal.familiares.title': 'Family trips',
        'modal.familiares.desc': 'We design perfect experiences for the whole family, where each member finds something special. We create unforgettable memories together, with activities adapted to all ages and needs.',
        'modal.familiares.list': 'What we can organize:',
        'modal.familiares.item1': 'Family accommodation with all amenities',
        'modal.familiares.item2': 'Activities for children, youth, and adults',
        'modal.familiares.item3': 'Flexible itinerary planning',
        'modal.familiares.item4': 'Educational and recreational experiences',
        'modal.familiares.item5': 'Safe and comfortable transfers',
        'modal.familiares.item6': 'Personalized advice for your family',
        'modal.lunas-miel.title': 'Honeymoons',
        'modal.lunas-miel.desc': 'We create romantic and unforgettable experiences to celebrate the beginning of your life together. Every detail is designed to make your honeymoon a unique and special moment.',
        'modal.lunas-miel.item1': 'Boutique hotels and exclusive resorts',
        'modal.lunas-miel.item2': 'Romantic and private experiences',
        'modal.lunas-miel.item3': 'Special dinners and unique moments',
        'modal.lunas-miel.item4': 'Activities for couples',
        'modal.lunas-miel.item5': 'Private and discreet transfers',
        'modal.lunas-miel.item6': 'Advice to create the perfect trip',
        'modal.lunas-miel.fixed': 'Trip for 2 people',
        'modal.escolares.title': 'School trips',
        'modal.escolares.desc': 'We organize safe and enriching educational trips that combine learning with fun. We facilitate experiences that complement students\' academic training.',
        'modal.escolares.item1': 'Safe and adequate accommodation for groups',
        'modal.escolares.item2': 'Educational and cultural activities',
        'modal.escolares.item3': 'Visits to museums, historical and natural sites',
        'modal.escolares.item4': 'Reliable group transportation',
        'modal.escolares.item5': 'Supervision and support during the trip',
        'modal.escolares.item6': 'Coordination with educational institutions',
        'modal.corporativos.title': 'Corporate trips',
        'modal.corporativos.desc': 'We manage business trips and corporate events with professionalism and efficiency. We take care of all the details so your team can focus on what\'s important.',
        'modal.corporativos.item1': 'Business hotel accommodation',
        'modal.corporativos.item2': 'Event and conference organization',
        'modal.corporativos.item3': 'Corporate transfers and logistics',
        'modal.corporativos.item4': 'Team building activities',
        'modal.corporativos.item5': 'Corporate group management',
        'modal.corporativos.item6': 'Advice for executive trips',
        'modal.individuales.title': 'Individual trips',
        'modal.individuales.desc': 'We design personalized experiences for independent travelers seeking freedom and authenticity. Each trip adapts to your interests, pace, and unique preferences.',
        'modal.individuales.item1': 'Accommodation according to your preferences',
        'modal.individuales.item2': 'Flexible and personalized itineraries',
        'modal.individuales.item3': 'Authentic and local experiences',
        'modal.individuales.item4': 'Individual transfers',
        'modal.individuales.item5': 'Personalized recommendations',
        'modal.individuales.item6': 'Advice for independent travelers',
        'modal.individuales.fixed': 'Trip for 1 person',
        'modal.grupos-especiales.title': 'Special groups',
        'modal.grupos-especiales.desc': 'We organize trips for groups with specific needs, adapting to each situation. Whether it\'s a group of friends, seniors, or groups with particular requirements, we create the perfect experience.',
        'modal.grupos-especiales.item1': 'Accommodation adapted to group needs',
        'modal.grupos-especiales.item2': 'Activities designed for the group',
        'modal.grupos-especiales.item3': 'Personalized itineraries',
        'modal.grupos-especiales.item4': 'Comfortable group transportation',
        'modal.grupos-especiales.item5': 'Support and assistance',
        'modal.grupos-especiales.item6': 'Specialized advice for groups',
        // Modal Forms
        'form.personas': 'Number of people',
        'form.dias': 'Number of days',
        'form.escuela': 'School or group name',
        'form.cotizar': 'What would you like to quote?',
        'form.hospedaje': 'Accommodation',
        'form.tours': 'Tours / activities',
        'form.tren': 'Train (if applicable)',
        'form.traslado': 'Ground transfer',
        'form.romanticas': 'Romantic experiences',
        'form.personalizadas': 'Personalized experiences',
        'form.submit': 'Send quote',
        'form.quote.title': 'Quote this trip',
        // Transport Modals
        'transport.autobuses.title': 'Buses tailored to you',
        'transport.autobuses.desc': 'We offer personalized ground transfers, whether for large groups or private services. We coordinate the transportation that best fits your itinerary and needs.',
        'transport.autobuses.salida': 'Departure city',
        'transport.autobuses.destino': 'Destination city',
        'transport.autobuses.servicio': 'Service type',
        'transport.autobuses.servicio.select': 'Select an option',
        'transport.autobuses.servicio.privado': 'Private',
        'transport.autobuses.servicio.grupal': 'Group',
        'transport.autobuses.submit': 'Request a quote',
        'transport.chepe-regional.title': 'Chepe Regional',
        'transport.chepe-regional.desc': 'Select your departure and destination station.',
        'transport.chepe-regional.salida': 'Departure station',
        'transport.chepe-regional.destino': 'Destination station',
        'transport.chepe-regional.select': 'Select a station',
        'transport.chepe-regional.clase': 'Class',
        'transport.chepe-regional.clase.turista': 'Tourist',
        'transport.chepe-regional.clase.primera': 'First',
        'transport.chepe-regional.fecha-salida': 'Departure date',
        'transport.chepe-regional.fecha-regreso': 'Return date',
        'transport.chepe-regional.temporada.alta': 'High season',
        'transport.chepe-regional.temporada.baja': 'Low season',
        'transport.chepe-regional.submit': 'Request availability',
        'transport.chepe-express.title': 'Chepe Express',
        'transport.chepe-express.desc': 'Chepe Express offers the premium Chepe experience, with luxury services and exceptional amenities while traveling through the Sierra Tarahumara.',
        'transport.chepe-express.route': 'Chepe Express Route',
        'transport.chepe-express.salida': 'Departure station',
        'transport.chepe-express.destino': 'Destination station',
        'transport.chepe-express.nota': 'ℹ️ Availability depends on the route direction.',
        'transport.chepe-express.clase.ejecutiva': 'Executive',
        'transport.chepe-express.fecha': 'Travel date',
        'transport.chepe-express.submit': 'Request availability',
        // Destination Modals
        'dest.creel.title': 'CREEL, CHIHUAHUA',
        'dest.creel.desc': 'Creel is the gateway to the Sierra Tarahumara, a destination where nature, Rarámuri culture, and adventure meet. Ideal for those seeking imposing landscapes, tranquility, and authentic experiences.',
        'dest.creel.exp': 'Featured experiences:',
        'dest.creel.exp1': 'Sierra Tarahumara tour',
        'dest.creel.exp2': 'Visit to Copper Canyon',
        'dest.creel.exp3': 'Valley of the Monks tour',
        'dest.creel.exp4': 'Arareko Lake',
        'dest.creel.exp5': 'Chepe train ride',
        'dest.creel.exp6': 'Local cultural and gastronomic experiences',
        'dest.sancristobal.title': 'SAN CRISTÓBAL DE LAS CASAS',
        'dest.sancristobal.desc': 'A magical colonial city nestled in the mountains of Chiapas, where indigenous tradition blends with a bohemian atmosphere. Its colorful streets, artisan markets, and natural surroundings make it a unique destination for lovers of culture and nature.',
        'dest.sancristobal.exp1': 'Colonial historic center tour',
        'dest.sancristobal.exp2': 'Visit to Tzotzil and Tzeltal indigenous communities',
        'dest.sancristobal.exp3': 'Artisan markets and local gastronomy',
        'dest.sancristobal.exp4': 'Excursion to the Chiapas Highlands',
        'dest.sancristobal.exp5': 'Tour of churches and colonial architecture',
        'dest.sancristobal.exp6': 'Ecotourism experiences in the region',
        'dest.parras.title': 'PARRAS DE LA FUENTE',
        'dest.parras.desc': 'The first magic town of Coahuila, the cradle of viticulture in America. Parras combines history, wine tradition, and unique desert landscapes. A perfect destination for wine lovers, history, and the tranquility of small Mexican towns.',
        'dest.parras.exp1': 'Vineyard and historic winery tours',
        'dest.parras.exp2': 'Wine tastings and oenological experiences',
        'dest.parras.exp3': 'Historic center tour',
        'dest.parras.exp4': 'Visit to Hacienda de Perote',
        'dest.parras.exp5': 'Cave exploration and natural formations',
        'dest.parras.exp6': 'Regional gastronomy and local products',
        'dest.cancun.title': 'CANCÚN',
        'dest.cancun.desc': 'The paradise of the Mexican Caribbean, where turquoise sea meets white sand. Cancún offers a perfect combination of spectacular beaches, vibrant nightlife, Mayan culture, and water adventures. A destination that has something for every traveler.',
        'dest.cancun.exp1': 'Relaxation on paradise beaches',
        'dest.cancun.exp2': 'Snorkeling and diving in coral reefs',
        'dest.cancun.exp3': 'Tour to Chichén Itzá and Mayan ruins',
        'dest.cancun.exp4': 'Catamaran rides and water activities',
        'dest.cancun.exp5': 'First-class gastronomic experiences',
        'dest.cancun.exp6': 'Nightlife and entertainment',
        'dest.mazatlan.title': 'MAZATLÁN',
        'dest.mazatlan.desc': 'The Pearl of the Pacific, a coastal city that combines tradition, modernity, and nature. With the longest boardwalk in Latin America, spectacular beaches, and a historic center full of life, Mazatlán offers authenticity and fun in one destination.',
        'dest.mazatlan.exp1': 'Beaches and water activities',
        'dest.mazatlan.exp2': 'Historic center and golden zone tour',
        'dest.mazatlan.exp3': 'Whale watching (season)',
        'dest.mazatlan.exp4': 'Fresh seafood and fish gastronomy',
        'dest.mazatlan.exp5': 'Stone Island and boat rides',
        'dest.mazatlan.exp6': 'Nightlife and family entertainment',
        'dest.tulum.title': 'TULUM',
        'dest.tulum.desc': 'A bohemian and ecological destination where Mayan ruins rise before the Caribbean Sea. Tulum is synonymous with tranquility, wellness, and connection with nature. Perfect for those seeking a more intimate and authentic experience in the Riviera Maya.',
        'dest.tulum.exp1': 'Visit to Mayan ruins by the sea',
        'dest.tulum.exp2': 'Pristine beaches and natural cenotes',
        'dest.tulum.exp3': 'Boutique hotels and wellness experiences',
        'dest.tulum.exp4': 'Snorkeling in the Mesoamerican Barrier Reef',
        'dest.tulum.exp5': 'Organic gastronomy and chef restaurants',
        'dest.tulum.exp6': 'Eco-tourism and sustainable experiences',
        'dest.cta': 'I want to quote this destination',
        // Common
        'common.select': 'Select an option',
        'common.dias-disponibles': 'Available days:'
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('rumbo-lang', lang);

    // Actualizar meta description y title
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = lang === 'es'
            ? 'Rumbo Co. - Diseñamos experiencias de viaje a tu medida. Planeación, hospedaje, tours y experiencias personalizadas.'
            : 'Rumbo Co. - We design travel experiences tailored to you. Planning, accommodation, tours and personalized experiences.';
    }

    const title = document.querySelector('title');
    if (title) {
        title.textContent = lang === 'es'
            ? 'Rumbo Co. - Viajar bien planeado se disfruta el doble'
            : 'Rumbo Co. - Well-planned travel is twice as enjoyable';
    }

    // Actualizar elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Si es un input, textarea o select, actualizar placeholder o value
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.type === 'text' || el.type === 'email' || el.type === 'tel' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                }
            } else if (el.tagName === 'LABEL') {
                el.textContent = translations[lang][key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Actualizar labels que no tienen data-i18n pero están asociados a inputs
    document.querySelectorAll('label').forEach(label => {
        const key = label.getAttribute('data-i18n');
        if (key && translations[lang] && translations[lang][key]) {
            label.textContent = translations[lang][key];
        }
    });

    // Actualizar options en selects
    document.querySelectorAll('option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = lang.toUpperCase();
    }
}

function initLanguage() {
    const savedLang = localStorage.getItem('rumbo-lang') || 'es';
    setLanguage(savedLang);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = document.documentElement.lang || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }
}

// ===================================
// TEMA (Light/Dark)
// ===================================
function getTimeBasedTheme() {
    const hour = new Date().getHours();
    return (hour >= 7 && hour < 20) ? 'light' : 'dark';
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('rumbo-theme-mode', theme);

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
    }
}

function initTheme() {
    const savedMode = localStorage.getItem('rumbo-theme-mode');
    let theme;

    if (savedMode === 'light' || savedMode === 'dark') {
        theme = savedMode;
    } else {
        theme = getTimeBasedTheme();
    }

    setTheme(theme);

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDarkMode = document.body.classList.contains('dark-mode');
            const newTheme = isDarkMode ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
}

// ===================================
// HEADER SCROLL EFFECT
// ===================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// MENÚ MÓVIL TOGGLE
// ===================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animación del botón hamburguesa
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// TABS DE DESTINOS
// ===================================
const tabButtons = document.querySelectorAll('.tab-button');
const destinationCards = document.querySelectorAll('.destination-card');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // Remover clase active de todos los botones
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');

        // Mostrar/ocultar tarjetas según el tab
        destinationCards.forEach(card => {
            const cardContent = card.getAttribute('data-content');
            if (cardContent === tabName) {
                card.classList.add('active');
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.classList.remove('active');
            }
        });
    });
});

// ===================================
// SISTEMA UNIFICADO DE MODALES
// ===================================

// Función unificada para abrir cualquier modal
function openModal(modal) {
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }
}

// Función unificada para cerrar cualquier modal
function closeModal(modal) {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll del body
    }
}

// Obtener todos los modales del sitio (cualquier tipo)
const allModals = document.querySelectorAll('.modal-overlay, .category-modal-overlay, .transport-modal-overlay');

// Obtener todos los botones de cierre (cualquier tipo)
const allCloseButtons = document.querySelectorAll('.modal-close, .category-modal-close, .transport-modal-close');

// Cerrar modal con botón X (unificado para todos)
allCloseButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar que el clic se propague al overlay
        const modal = button.closest('.modal-overlay, .category-modal-overlay, .transport-modal-overlay');
        closeModal(modal);
    });
});

// Cerrar modal al hacer click fuera del contenido (unificado para todos)
allModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

// Cerrar modal con tecla ESC (unificado para todos)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        allModals.forEach(modal => {
            if (modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    }
});

// ===================================
// MODALES DE DESTINOS
// ===================================
const destinationCardsWithModal = document.querySelectorAll('.destination-card[data-destination]');
const modalQuoteButtons = document.querySelectorAll('.modal-btn');

// Abrir modal al hacer click en una tarjeta de destino
destinationCardsWithModal.forEach(card => {
    card.addEventListener('click', () => {
        const destination = card.getAttribute('data-destination');
        const modal = document.getElementById(`modal-${destination}`);
        openModal(modal);
    });

    // Cambiar cursor a pointer
    card.style.cursor = 'pointer';
});

// Al hacer click en "Quiero cotizar este destino", cerrar modal y scroll al formulario
modalQuoteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = button.closest('.modal-overlay');
        closeModal(modal);

        // Scroll suave al formulario
        setTimeout(() => {
            const cotizacionSection = document.getElementById('cotizacion');
            if (cotizacionSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = cotizacionSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Opcional: focus en el primer campo del formulario
                const firstInput = document.getElementById('nombre');
                if (firstInput) {
                    setTimeout(() => firstInput.focus(), 500);
                }
            }
        }, 300);
    });
});

// ===================================
// MODALES DE CATEGORÍAS DE VIAJE
// ===================================
const travelCards = document.querySelectorAll('.travel-card[data-category]');

// Abrir modal al hacer click en una tarjeta de categoría
travelCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        const modal = document.getElementById(`modal-${category}`);
        openModal(modal);
    });
});

// ===================================
// FORMULARIOS DE COTIZACIÓN EN MODALES
// ===================================
const categoryQuoteForms = document.querySelectorAll('.category-quote-form');

categoryQuoteForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const category = form.getAttribute('data-category');

        // Obtener número de personas (fijo para lunas de miel e individuales, input para otros)
        let personas;
        if (category === 'lunas-miel') {
            personas = '2';
        } else if (category === 'individuales') {
            personas = '1';
        } else {
            const personasInput = form.querySelector('input[name="personas"]');
            personas = personasInput ? personasInput.value : '';
        }

        const dias = form.querySelector('input[name="dias"]').value;
        const servicios = Array.from(form.querySelectorAll('input[name="servicios"]:checked')).map(cb => cb.value);

        // Obtener nombre de escuela/grupo si existe (solo para Tipo A)
        const escuelaInput = form.querySelector('input[name="escuela"]');
        const escuela = escuelaInput ? escuelaInput.value.trim() : '';

        // Validar que al menos un servicio esté seleccionado
        if (servicios.length === 0) {
            alert('Por favor, selecciona al menos un servicio a cotizar.');
            return;
        }

        // Mapear nombres de categorías
        const categoryNames = {
            'familiares': 'Viajes familiares',
            'lunas-miel': 'Luna de miel',
            'escolares': 'Viajes escolares',
            'corporativos': 'Viajes corporativos',
            'individuales': 'Viaje individual',
            'grupos-especiales': 'Grupos especiales'
        };

        // Mapear nombres de servicios
        const serviceNames = {
            'traslado-terrestre': 'Traslado terrestre',
            'hospedaje': 'Hospedaje',
            'experiencias-romanticas': 'Experiencias románticas',
            'experiencias-personalizadas': 'Experiencias personalizadas',
            'tours-actividades': 'Tours / actividades',
            'tren': 'Tren'
        };

        const categoryName = categoryNames[category] || category;
        const serviciosTexto = servicios.map(s => serviceNames[s] || s).join(', ');

        // Crear mensaje para WhatsApp
        let mensajeWhatsApp = `Hola, me gustaría cotizar un viaje.\n\n`;
        mensajeWhatsApp += `*Tipo de viaje:* ${categoryName}\n`;
        mensajeWhatsApp += `*Personas:* ${personas}\n`;
        mensajeWhatsApp += `*Número de días:* ${dias}\n`;

        if (escuela) {
            mensajeWhatsApp += `*Nombre de escuela/grupo:* ${escuela}\n`;
        }

        mensajeWhatsApp += `*Servicios a cotizar:* ${serviciosTexto}`;

        // Codificar mensaje para URL
        const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

        // Número de WhatsApp
        const numeroWhatsApp = '6146018486';

        // Crear URL de WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        // Abrir WhatsApp en nueva ventana
        window.open(urlWhatsApp, '_blank');

        // Mostrar confirmación
        const submitButton = form.querySelector('.category-quote-submit');
        const originalText = submitButton.textContent;
        submitButton.textContent = '✓ Enviado';
        submitButton.disabled = true;

        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            closeModal(form.closest('.category-modal-overlay'));
        }, 1500);
    });
});

// ===================================
// MODALES DE TRANSPORTE
// ===================================
const transportCards = document.querySelectorAll('.transport-card[data-transport]');

// Abrir modal al hacer click en una tarjeta de transporte
transportCards.forEach(card => {
    card.addEventListener('click', () => {
        const transport = card.getAttribute('data-transport');
        const modal = document.getElementById(`modal-${transport}`);

        if (modal) {
            openModal(modal);

            // Si es el modal de Chepe Regional, inicializar fechas
            if (transport === 'chepe-regional') {
                setTimeout(() => {
                    fechasRegionalInicializado = false; // Permitir reinicialización
                    inicializarFechasChepeRegional();
                }, 100);
            }

            // Si es el modal de Chepe Express, inicializar fechas y lógica de días
            if (transport === 'chepe-express') {
                setTimeout(() => {
                    chepeExpressInicializado = false; // Permitir reinicialización
                    inicializarChepeExpress();
                    // Inicializar mapa después de que se haya inicializado todo
                    setTimeout(() => {
                        const fechaSalidaExpress = document.getElementById('fecha-salida-express');
                        const estacionSalida = document.getElementById('estacion-salida-express');
                        const estacionDestino = document.getElementById('estacion-destino-express');
                        if (fechaSalidaExpress && fechaSalidaExpress.value && estacionSalida && estacionSalida.value && estacionDestino && estacionDestino.value) {
                            // Si ya hay una fecha y estaciones, actualizar mapa
                            const actualizarMapa = window.actualizarMapaChepeExpress;
                            if (actualizarMapa) actualizarMapa();
                        } else {
                            // Resetear mapa a estado inactivo
                            const todasLasEstaciones = document.querySelectorAll('#modal-chepe-express .route-station');
                            const todosLosTramos = document.querySelectorAll('#modal-chepe-express .route-segment');
                            const todasLasLabels = document.querySelectorAll('#modal-chepe-express .route-station-label');
                            todasLasEstaciones.forEach(estacion => {
                                estacion.classList.remove('active', 'temporada-alta', 'temporada-baja');
                                estacion.classList.add('inactive');
                            });
                            todosLosTramos.forEach(tramo => {
                                tramo.classList.remove('active', 'temporada-alta', 'temporada-baja');
                                tramo.classList.add('inactive');
                            });
                            todasLasLabels.forEach(label => {
                                label.classList.remove('active');
                                label.classList.add('inactive');
                            });
                        }
                    }, 50);
                }, 100);
            }
        }
    });
});

// ===================================
// FORMULARIOS DE TRANSPORTE
// ===================================
const transportForms = document.querySelectorAll('.transport-form');

transportForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formId = form.getAttribute('id');
        const submitButton = form.querySelector('.transport-submit');
        const originalText = submitButton.textContent;

        // Construir mensaje según el tipo de formulario
        let message = '';

        if (formId === 'form-autobuses') {
            const ciudadSalida = form.querySelector('#ciudad-salida').value;
            const ciudadDestino = form.querySelector('#ciudad-destino').value;
            const personas = form.querySelector('#personas-autobuses').value;
            const tipoServicio = form.querySelector('#tipo-servicio').value;
            const fechaSalida = form.querySelector('#fecha-salida-autobuses').value;
            const fechaRegreso = form.querySelector('#fecha-regreso-autobuses').value;

            if (!fechaSalida || !fechaRegreso) {
                alert('Por favor selecciona fecha de salida y fecha de regreso');
                return;
            }

            if (fechaRegreso < fechaSalida) {
                alert('La fecha de regreso debe ser posterior o igual a la fecha de salida');
                return;
            }

            const fechaSalidaFormateada = formatearFecha(fechaSalida);
            const fechaRegresoFormateada = formatearFecha(fechaRegreso);

            message = `Hola, me gustaría solicitar una cotización de autobuses a tu medida.\n\n` +
                `Servicio: Autobuses a tu medida\n` +
                `Origen: ${ciudadSalida}\n` +
                `Destino: ${ciudadDestino}\n` +
                `Tipo de viaje: Viaje redondo\n` +
                `Fecha de salida: ${fechaSalidaFormateada}\n` +
                `Fecha de regreso: ${fechaRegresoFormateada}\n` +
                `Número de personas: ${personas}\n` +
                `Tipo de servicio: ${tipoServicio}`;
        } else if (formId === 'form-chepe-regional') {
            const estacionSalida = form.querySelector('#estacion-salida-regional').value;
            const estacionDestino = form.querySelector('#estacion-destino-regional').value;
            const claseRadio = form.querySelector('input[name="clase-regional"]:checked');
            const tipoViajeRadio = form.querySelector('input[name="tipo-viaje-regional"]:checked');
            const fechaInicio = form.querySelector('#fecha-inicio-regional').value;
            const fechaFin = form.querySelector('#fecha-fin-regional').value;
            const personas = form.querySelector('#personas-regional').value;

            if (!estacionSalida || !estacionDestino) {
                alert('Por favor selecciona estación de salida y destino');
                return;
            }

            if (estacionSalida === estacionDestino) {
                alert('La estación de salida y destino no pueden ser la misma');
                return;
            }

            if (!claseRadio) {
                alert('Por favor selecciona una clase');
                return;
            }

            if (!tipoViajeRadio) {
                alert('Por favor selecciona el tipo de viaje');
                return;
            }

            if (!fechaInicio) {
                alert('Por favor selecciona una fecha de salida');
                return;
            }

            const tipoViaje = tipoViajeRadio.value;
            if (tipoViaje === 'redondo' && !fechaFin) {
                alert('Por favor selecciona una fecha de regreso');
                return;
            }

            // Validar días permitidos según estación de salida
            const diasPermitidos = obtenerDiasPermitidosChepeRegional(estacionSalida, estacionDestino);
            if (diasPermitidos && diasPermitidos.length > 0) {
                const fechaObj = new Date(fechaInicio + 'T00:00:00');
                const diaSemana = fechaObj.getDay();
                if (!diasPermitidos.includes(diaSemana)) {
                    const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                    const diasPermitidosNombres = diasPermitidos.map(d => nombresDias[d]).join(', ');
                    alert(`Para salir desde ${estacionSalida}, el Chepe Regional solo opera los días: ${diasPermitidosNombres}. Por favor selecciona una fecha válida.`);
                    return;
                }
            }

            // Validar fecha de regreso si es redondo
            if (tipoViaje === 'redondo' && fechaFin) {
                if (fechaFin < fechaInicio) {
                    alert('La fecha de regreso debe ser posterior o igual a la fecha de salida');
                    return;
                }
                // Validar días permitidos para regreso (sentido contrario)
                const diasPermitidosRegreso = obtenerDiasPermitidosChepeRegional(estacionDestino, estacionSalida);
                if (diasPermitidosRegreso && diasPermitidosRegreso.length > 0) {
                    const fechaRegresoObj = new Date(fechaFin + 'T00:00:00');
                    const diaSemanaRegreso = fechaRegresoObj.getDay();
                    if (!diasPermitidosRegreso.includes(diaSemanaRegreso)) {
                        const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                        const diasPermitidosNombres = diasPermitidosRegreso.map(d => nombresDias[d]).join(', ');
                        alert(`Para regresar desde ${estacionDestino}, el Chepe Regional solo opera los días: ${diasPermitidosNombres}. Por favor selecciona una fecha válida.`);
                        return;
                    }
                }
            }

            const clase = claseRadio.value;
            const tipoViajeTexto = tipoViaje === 'solo-ida' ? 'Solo ida' : 'Viaje redondo';
            const fechaInicioFormateada = formatearFecha(fechaInicio);
            const temporadaInicio = obtenerTemporada(fechaInicio);

            let fechasTexto = fechaInicioFormateada;
            if (tipoViaje === 'redondo' && fechaFin) {
                const fechaFinFormateada = formatearFecha(fechaFin);
                fechasTexto = `Salida: ${fechaInicioFormateada}, Regreso: ${fechaFinFormateada}`;
            }

            message = `Hola, me gustaría solicitar disponibilidad para el Chepe Regional.\n\n` +
                `Servicio: Chepe Regional\n` +
                `Origen: ${estacionSalida}\n` +
                `Destino: ${estacionDestino}\n` +
                `Tipo de viaje: ${tipoViajeTexto}\n` +
                `Fechas: ${fechasTexto}\n` +
                `Clase: ${clase}\n` +
                `Temporada: ${temporadaInicio}\n` +
                `Número de personas: ${personas}`;
        } else if (formId === 'form-chepe-express') {
            const estacionSalida = form.querySelector('#estacion-salida-express').value;
            const estacionDestino = form.querySelector('#estacion-destino-express').value;
            const claseRadio = form.querySelector('input[name="clase-express"]:checked');
            const tipoViajeRadio = form.querySelector('input[name="tipo-viaje-express"]:checked');
            const fechaSalida = form.querySelector('#fecha-salida-express').value;
            const fechaRegreso = form.querySelector('#fecha-regreso-express').value;
            const personas = form.querySelector('#personas-express').value;

            if (!estacionSalida || !estacionDestino) {
                alert('Por favor selecciona estación de salida y destino');
                return;
            }

            if (estacionSalida === estacionDestino) {
                alert('La estación de salida y destino no pueden ser la misma');
                return;
            }

            if (!claseRadio) {
                alert('Por favor selecciona una clase');
                return;
            }

            if (!tipoViajeRadio) {
                alert('Por favor selecciona el tipo de viaje');
                return;
            }

            if (!fechaSalida) {
                alert('Por favor selecciona una fecha de salida');
                return;
            }

            const tipoViaje = tipoViajeRadio.value;
            if (tipoViaje === 'redondo' && !fechaRegreso) {
                alert('Por favor selecciona una fecha de regreso');
                return;
            }

            // Validar días permitidos según estación de salida
            const diasPermitidos = obtenerDiasPermitidosChepeExpress(estacionSalida, estacionDestino);
            if (diasPermitidos && diasPermitidos.length > 0) {
                const fechaObj = new Date(fechaSalida + 'T00:00:00');
                const diaSemana = fechaObj.getDay();
                if (!diasPermitidos.includes(diaSemana)) {
                    const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                    const diasPermitidosNombres = diasPermitidos.map(d => nombresDias[d]).join(', ');
                    alert(`Para salir desde ${estacionSalida}, el Chepe Express solo opera los días: ${diasPermitidosNombres}. Por favor selecciona una fecha válida.`);
                    return;
                }
            }

            // Validar fecha de regreso si es redondo
            if (tipoViaje === 'redondo' && fechaRegreso) {
                if (fechaRegreso < fechaSalida) {
                    alert('La fecha de regreso debe ser posterior o igual a la fecha de salida');
                    return;
                }
                // Validar días permitidos para regreso (sentido contrario)
                const diasPermitidosRegreso = obtenerDiasPermitidosChepeExpress(estacionDestino, estacionSalida);
                if (diasPermitidosRegreso && diasPermitidosRegreso.length > 0) {
                    const fechaRegresoObj = new Date(fechaRegreso + 'T00:00:00');
                    const diaSemanaRegreso = fechaRegresoObj.getDay();
                    if (!diasPermitidosRegreso.includes(diaSemanaRegreso)) {
                        const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                        const diasPermitidosNombres = diasPermitidosRegreso.map(d => nombresDias[d]).join(', ');
                        alert(`Para regresar desde ${estacionDestino}, el Chepe Express solo opera los días: ${diasPermitidosNombres}. Por favor selecciona una fecha válida.`);
                        return;
                    }
                }
            }

            const clase = claseRadio.value;
            const tipoViajeTexto = tipoViaje === 'solo-ida' ? 'Solo ida' : 'Viaje redondo';
            const fechaSalidaFormateada = formatearFecha(fechaSalida);
            const temporada = obtenerTemporada(fechaSalida);

            let fechasTexto = fechaSalidaFormateada;
            if (tipoViaje === 'redondo' && fechaRegreso) {
                const fechaRegresoFormateada = formatearFecha(fechaRegreso);
                fechasTexto = `Salida: ${fechaSalidaFormateada}, Regreso: ${fechaRegresoFormateada}`;
            }

            message = `Hola, me gustaría solicitar disponibilidad para el Chepe Express.\n\n` +
                `Servicio: Chepe Express\n` +
                `Origen: ${estacionSalida}\n` +
                `Destino: ${estacionDestino}\n` +
                `Tipo de viaje: ${tipoViajeTexto}\n` +
                `Fechas: ${fechasTexto}\n` +
                `Clase: ${clase}\n` +
                `Temporada: ${temporada}\n` +
                `Número de personas: ${personas}`;
        }

        // Abrir WhatsApp
        const whatsappNumber = '6146018486';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Mostrar confirmación
        submitButton.textContent = '✓ Enviado';
        submitButton.disabled = true;

        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            closeModal(form.closest('.transport-modal-overlay'));
        }, 1500);
    });
});

// ===================================
// FUNCIONES AUXILIARES PARA DÍAS PERMITIDOS
// ===================================

// Función para obtener días permitidos del Chepe Regional según estación y sentido
function obtenerDiasPermitidosChepeRegional(estacionSalida, estacionDestino) {
    // Terminales: Chihuahua → Los Mochis (Mar, Sáb) | Los Mochis → Chihuahua (Mié, Dom)
    if (estacionSalida === 'Chihuahua') {
        return [2, 6]; // Martes, Sábado
    } else if (estacionSalida === 'Los Mochis') {
        return [3, 0]; // Miércoles, Domingo
    }

    // Estaciones intermedias - determinar dirección según destino
    // Orden: Chihuahua (0) → Los Mochis (12)
    const estacionesOrden = ['Chihuahua', 'Cuauhtémoc', 'San Juanito', 'Creel', 'Pitorreal', 'Divisadero', 'Posada', 'San Rafael', 'Cuiteco', 'Bahuichivo', 'Témoris', 'El Fuerte', 'Los Mochis'];

    const indiceSalida = estacionesOrden.indexOf(estacionSalida);
    const indiceDestino = estacionesOrden.indexOf(estacionDestino);

    if (indiceSalida === -1 || indiceDestino === -1) return null;

    if (indiceDestino > indiceSalida) {
        return [2, 6]; // Martes, Sábado (hacia Los Mochis)
    } else {
        return [3, 0]; // Miércoles, Domingo (hacia Chihuahua)
    }
}

// Función para obtener días BASE del Chepe Express según estación y sentido
// La excepción de Mayo/Jun/Ago/Sep (sin Lun/Mar) se aplica en el disable de flatpickr
function obtenerDiasPermitidosChepeExpress(estacionSalida, estacionDestino) {
    if (estacionSalida === 'Creel') {
        return [0, 2, 5]; // Domingo, Martes, Viernes (Creel → Los Mochis)
    } else if (estacionSalida === 'Los Mochis') {
        return [1, 4, 0]; // Lunes, Jueves, Domingo (Los Mochis → Creel)
    }

    // Estaciones intermedias
    const estacionesOrden = ['Creel', 'Divisadero', 'Bahuichivo', 'El Fuerte', 'Los Mochis'];
    const indiceSalida = estacionesOrden.indexOf(estacionSalida);
    const indiceDestino = estacionesOrden.indexOf(estacionDestino);

    if (indiceSalida === -1 || indiceDestino === -1) return null;

    if (indiceDestino > indiceSalida) {
        return [0, 2, 5]; // Domingo, Martes, Viernes (hacia Los Mochis)
    } else {
        return [1, 4, 0]; // Lunes, Jueves, Domingo (hacia Creel)
    }
}

// ===================================
// INICIALIZACIÓN DE AUTOBUSES
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const fechaSalidaAutobuses = document.getElementById('fecha-salida-autobuses');
    const fechaRegresoAutobuses = document.getElementById('fecha-regreso-autobuses');

    if (fechaSalidaAutobuses && fechaRegresoAutobuses) {
        // Usar fecha local para evitar problemas de zona horaria
        const today = new Date().toLocaleDateString('en-CA'); // Formato YYYY-MM-DD
        fechaSalidaAutobuses.setAttribute('min', today);
        fechaRegresoAutobuses.setAttribute('min', today);

        fechaSalidaAutobuses.addEventListener('change', () => {
            if (fechaSalidaAutobuses.value) {
                fechaRegresoAutobuses.setAttribute('min', fechaSalidaAutobuses.value);
                if (fechaRegresoAutobuses.value && fechaRegresoAutobuses.value <= fechaSalidaAutobuses.value) {
                    fechaRegresoAutobuses.value = '';
                }
            }
        });

        fechaRegresoAutobuses.addEventListener('change', () => {
            if (fechaRegresoAutobuses.value && fechaSalidaAutobuses.value && fechaRegresoAutobuses.value < fechaSalidaAutobuses.value) {
                alert('La fecha de regreso debe ser posterior o igual a la fecha de salida.');
                fechaRegresoAutobuses.value = '';
            }
        });
    }
});

// ===================================
// FECHAS FORMULARIO DE COTIZACIÓN
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const fechaInicio = document.getElementById('fecha-inicio');
    const fechaFin = document.getElementById('fecha-fin');

    if (fechaInicio && fechaFin) {
        const today = new Date().toLocaleDateString('en-CA');
        fechaInicio.setAttribute('min', today);
        fechaFin.setAttribute('min', today);

        fechaInicio.addEventListener('change', () => {
            if (fechaInicio.value) {
                fechaFin.setAttribute('min', fechaInicio.value);
                // Limpiar la fecha de regreso si es menor o igual a la nueva fecha de inicio
                if (fechaFin.value && fechaFin.value <= fechaInicio.value) {
                    fechaFin.value = '';
                }
            }
        });

        fechaFin.addEventListener('change', () => {
            if (fechaFin.value && fechaInicio.value && fechaFin.value < fechaInicio.value) {
                alert('La fecha de regreso debe ser posterior a la fecha de inicio.');
                fechaFin.value = '';
            }
        });
    }
});

// ===================================
// MANEJO DE FECHAS EN MODAL CHEPE REGIONAL
// ===================================
// Variables para instancias de flatpickr del Regional
let fpInicioRegional = null;
let fpFinRegional = null;

function inicializarFechasChepeRegional() {
    if (fechasRegionalInicializado) return;

    const estacionSalida = document.getElementById('estacion-salida-regional');
    const estacionDestino = document.getElementById('estacion-destino-regional');
    const tipoViajeRadios = document.querySelectorAll('input[name="tipo-viaje-regional"]');
    const fechaInicioRegional = document.getElementById('fecha-inicio-regional');
    const fechaFinRegional = document.getElementById('fecha-fin-regional');
    const fechaRegresoContainer = document.getElementById('fecha-regreso-regional-container');
    const diasDisponiblesInfo = document.getElementById('dias-disponibles-regional');
    const notaEstacionIntermedia = document.getElementById('nota-estacion-intermedia-regional');
    const temporadaIndicatorRegional = document.getElementById('temporada-indicator-regional');

    if (!fechaInicioRegional || !fechaFinRegional) return;

    fechasRegionalInicializado = true;

    // Función para mostrar días disponibles en el info-box
    function mostrarDiasDisponibles() {
        if (!diasDisponiblesInfo || !estacionSalida?.value) return;
        const salida = estacionSalida.value;
        const destino = estacionDestino?.value || '';
        if (!destino) { diasDisponiblesInfo.style.display = 'none'; return; }

        const diasPermitidos = obtenerDiasPermitidosChepeRegional(salida, destino);
        if (diasPermitidos?.length > 0) {
            const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            diasDisponiblesInfo.innerHTML = `<strong>Días de salida disponibles:</strong> ${diasPermitidos.map(d => nombresDias[d]).join(', ')}`;
            diasDisponiblesInfo.style.display = 'block';
        } else {
            diasDisponiblesInfo.style.display = 'none';
        }
        if (notaEstacionIntermedia) {
            notaEstacionIntermedia.style.display = (salida !== 'Los Mochis' && salida !== 'Chihuahua' && destino) ? 'block' : 'none';
        }
    }

    // Función disable para flatpickr - bloquea visualmente los días no permitidos
    function disableSalida(date) {
        if (!estacionSalida?.value || !estacionDestino?.value) return false;
        const dias = obtenerDiasPermitidosChepeRegional(estacionSalida.value, estacionDestino.value);
        if (!dias) return false;
        return !dias.includes(date.getDay());
    }

    function disableRegreso(date) {
        if (!estacionDestino?.value || !estacionSalida?.value) return false;
        const dias = obtenerDiasPermitidosChepeRegional(estacionDestino.value, estacionSalida.value);
        if (!dias) return false;
        return !dias.includes(date.getDay());
    }

    // Inicializar flatpickr - fecha de salida
    fpInicioRegional = flatpickr(fechaInicioRegional, {
        locale: flatpickr.l10ns.es,
        minDate: 'today',
        dateFormat: 'Y-m-d',
        disable: [disableSalida],
        onChange: function (selectedDates, dateStr) {
            if (!dateStr) return;
            if (fpFinRegional) {
                fpFinRegional.set('minDate', dateStr);
                if (fpFinRegional.selectedDates[0] && fpFinRegional.selectedDates[0] <= selectedDates[0]) {
                    fpFinRegional.clear();
                }
            }
            actualizarIndicadorTemporada(dateStr, temporadaIndicatorRegional);
        }
    });

    // Inicializar flatpickr - fecha de regreso
    fpFinRegional = flatpickr(fechaFinRegional, {
        locale: flatpickr.l10ns.es,
        minDate: 'today',
        dateFormat: 'Y-m-d',
        disable: [disableRegreso],
        onChange: function (selectedDates, dateStr) {
            if (!dateStr) return;
            if (fpInicioRegional?.selectedDates[0] && selectedDates[0] <= fpInicioRegional.selectedDates[0]) {
                alert('La fecha de regreso debe ser posterior a la fecha de salida.');
                fpFinRegional.clear();
            }
        }
    });

    // Tipo de viaje: mostrar/ocultar fecha de regreso
    tipoViajeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'redondo') {
                fechaRegresoContainer.style.display = 'block';
                fechaFinRegional.required = true;
            } else {
                fechaRegresoContainer.style.display = 'none';
                fechaFinRegional.required = false;
                fpFinRegional?.clear();
            }
        });
    });

    // Cambio de estación: redibujar flatpickr con nuevos días permitidos
    function onEstacionChange() {
        fpInicioRegional?.set('disable', [disableSalida]);
        fpFinRegional?.set('disable', [disableRegreso]);
        fpInicioRegional?.clear();
        fpFinRegional?.clear();
        if (temporadaIndicatorRegional) temporadaIndicatorRegional.style.display = 'none';
        mostrarDiasDisponibles();
    }

    estacionSalida?.addEventListener('change', onEstacionChange);
    estacionDestino?.addEventListener('change', onEstacionChange);
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initTheme();
    inicializarFechasChepeRegional();
    inicializarChepeExpress();
});

// ===================================
// MANEJO DE CHEPE EXPRESS
// ===================================
let chepeExpressInicializado = false;

function inicializarChepeExpress() {
    if (chepeExpressInicializado) {
        return;
    }

    const estacionSalida = document.getElementById('estacion-salida-express');
    const estacionDestino = document.getElementById('estacion-destino-express');
    const tipoViajeRadios = document.querySelectorAll('input[name="tipo-viaje-express"]');
    const fechaSalidaExpress = document.getElementById('fecha-salida-express');
    const fechaRegresoExpress = document.getElementById('fecha-regreso-express');
    const fechaRegresoContainer = document.getElementById('fecha-regreso-express-container');
    const fechasDisplayExpress = document.getElementById('fechas-display-express');
    const notaEstacion = document.getElementById('nota-estacion-intermedia');
    const diasDisponiblesInfo = document.getElementById('dias-disponibles-express');

    if (!estacionSalida || !fechaSalidaExpress) {
        return;
    }

    chepeExpressInicializado = true;

    // Establecer fecha mínima como hoy (local)
    const today = new Date().toLocaleDateString('en-CA');
    fechaSalidaExpress.setAttribute('min', today);
    if (fechaRegresoExpress) {
        fechaRegresoExpress.setAttribute('min', today);
    }

    const temporadaIndicatorExpress = document.getElementById('temporada-indicator-express');
    const mapStatusMessage = document.getElementById('map-status-message');

    // Función para actualizar el mapa visualmente
    function actualizarMapaChepeExpress() {
        const estacionSalidaVal = estacionSalida ? estacionSalida.value : '';
        const estacionDestinoVal = estacionDestino ? estacionDestino.value : '';
        const fechaVal = fechaSalidaExpress ? fechaSalidaExpress.value : '';

        // Si no hay fecha o estaciones, resetear mapa
        if (!fechaVal || !estacionSalidaVal || !estacionDestinoVal) {
            resetearMapa();
            if (mapStatusMessage) mapStatusMessage.style.display = 'none';
            return;
        }

        // Determinar si hay recorrido
        const diasPermitidos = obtenerDiasPermitidosChepeExpress(estacionSalidaVal, estacionDestinoVal);
        const fechaObj = new Date(fechaVal + 'T00:00:00');
        const diaSemana = fechaObj.getDay();
        const hayRecorrido = diasPermitidos && diasPermitidos.length > 0 && diasPermitidos.includes(diaSemana);

        // Determinar temporada
        const temporada = esTemporadaAlta(fechaVal) ? 'alta' : 'baja';

        // Determinar estaciones del recorrido
        const estacionesOrden = ['Creel', 'Divisadero', 'Bahuichivo', 'El Fuerte', 'Los Mochis'];
        const indiceSalida = estacionesOrden.indexOf(estacionSalidaVal);
        const indiceDestino = estacionesOrden.indexOf(estacionDestinoVal);

        // Mapeo de nombres de estaciones a IDs en el SVG
        const estacionIdMap = {
            'Creel': 'creel',
            'Divisadero': 'divisadero',
            'Bahuichivo': 'bahuichivo',
            'El Fuerte': 'elfuerte',
            'Los Mochis': 'mochis'
        };

        // Actualizar mapa
        if (hayRecorrido && indiceSalida !== -1 && indiceDestino !== -1) {
            // Activar estaciones y tramos del recorrido
            const inicio = Math.min(indiceSalida, indiceDestino);
            const fin = Math.max(indiceSalida, indiceDestino);

            // Activar estaciones
            for (let i = inicio; i <= fin; i++) {
                const estacionNombre = estacionesOrden[i];
                const estacionId = estacionIdMap[estacionNombre];
                const estacionElement = document.getElementById(`station-${estacionId}`);
                // Buscar el label de texto correspondiente (está después del círculo en el SVG)
                const svg = estacionElement ? estacionElement.closest('svg') : null;
                const labelElement = svg ? svg.querySelector(`text[data-station="${estacionId}"], text:has-text("${estacionNombre}")`) : null;

                if (estacionElement) {
                    estacionElement.classList.remove('inactive');
                    estacionElement.classList.add('active', `temporada-${temporada}`);
                }
                // Buscar label por posición (el texto que sigue al círculo)
                const allTexts = svg ? Array.from(svg.querySelectorAll('text.route-station-label')) : [];
                const labelText = allTexts.find(text => {
                    const x = parseFloat(text.getAttribute('x'));
                    const estacionX = estacionElement ? parseFloat(estacionElement.getAttribute('cx')) : null;
                    return estacionX && Math.abs(x - estacionX) < 1;
                });

                if (labelText) {
                    labelText.classList.remove('inactive');
                    labelText.classList.add('active');
                }
            }

            // Desactivar estaciones fuera del recorrido
            for (let i = 0; i < estacionesOrden.length; i++) {
                if (i < inicio || i > fin) {
                    const estacionNombre = estacionesOrden[i];
                    const estacionId = estacionIdMap[estacionNombre];
                    const estacionElement = document.getElementById(`station-${estacionId}`);
                    const svg = estacionElement ? estacionElement.closest('svg') : null;
                    const allTexts = svg ? Array.from(svg.querySelectorAll('text.route-station-label')) : [];
                    const labelText = allTexts.find(text => {
                        const x = parseFloat(text.getAttribute('x'));
                        const estacionX = estacionElement ? parseFloat(estacionElement.getAttribute('cx')) : null;
                        return estacionX && Math.abs(x - estacionX) < 1;
                    });

                    if (estacionElement) {
                        estacionElement.classList.remove('active', 'temporada-alta', 'temporada-baja');
                        estacionElement.classList.add('inactive');
                    }
                    if (labelText) {
                        labelText.classList.remove('active');
                        labelText.classList.add('inactive');
                    }
                }
            }

            // Activar tramos del recorrido
            for (let i = inicio; i < fin; i++) {
                const estacionActual = estacionIdMap[estacionesOrden[i]];
                const estacionSiguiente = estacionIdMap[estacionesOrden[i + 1]];
                const tramoElement = document.getElementById(`tramo-${estacionActual}-${estacionSiguiente}`);

                if (tramoElement) {
                    tramoElement.classList.remove('inactive');
                    tramoElement.classList.add('active', `temporada-${temporada}`);
                }
            }

            // Desactivar tramos fuera del recorrido
            const todosLosTramos = document.querySelectorAll('.route-segment');
            todosLosTramos.forEach(tramo => {
                const tramoId = tramo.id;
                let esTramoActivo = false;

                for (let i = inicio; i < fin; i++) {
                    const estacionActual = estacionIdMap[estacionesOrden[i]];
                    const estacionSiguiente = estacionIdMap[estacionesOrden[i + 1]];
                    if (tramoId === `tramo-${estacionActual}-${estacionSiguiente}`) {
                        esTramoActivo = true;
                        break;
                    }
                }

                if (!esTramoActivo) {
                    tramo.classList.remove('active', 'temporada-alta', 'temporada-baja');
                    tramo.classList.add('inactive');
                }
            });

            // Actualizar overlay de temporada
            const temporadaOverlay = document.getElementById('temporada-overlay');
            if (temporadaOverlay) {
                temporadaOverlay.classList.remove('temporada-alta', 'temporada-baja');
                temporadaOverlay.classList.add(`temporada-${temporada}`);
            }

            // Mostrar mensaje de estado
            if (mapStatusMessage) {
                const temporadaTexto = temporada === 'alta' ? 'alta' : 'baja';
                mapStatusMessage.textContent = `✓ Recorrido disponible – Temporada ${temporadaTexto}`;
                mapStatusMessage.className = 'map-status-message disponible';
                mapStatusMessage.style.display = 'block';
            }
        } else {
            // No hay recorrido
            resetearMapa();

            // Mostrar mensaje de no disponibilidad
            if (mapStatusMessage) {
                mapStatusMessage.textContent = 'No hay recorrido del tren en esta fecha.';
                mapStatusMessage.className = 'map-status-message no-disponible';
                mapStatusMessage.style.display = 'block';
            }
        }
    }

    // Función para resetear el mapa
    function resetearMapa() {
        const todasLasEstaciones = document.querySelectorAll('#modal-chepe-express .route-station');
        const todosLosTramos = document.querySelectorAll('#modal-chepe-express .route-segment');
        const todasLasLabels = document.querySelectorAll('#modal-chepe-express .route-station-label');
        const temporadaOverlay = document.getElementById('temporada-overlay');

        todasLasEstaciones.forEach(estacion => {
            estacion.classList.remove('active', 'inactive', 'temporada-alta', 'temporada-baja');
            estacion.classList.add('inactive');
        });

        todosLosTramos.forEach(tramo => {
            tramo.classList.remove('active', 'inactive', 'temporada-alta', 'temporada-baja');
            tramo.classList.add('inactive');
        });

        todasLasLabels.forEach(label => {
            label.classList.remove('active', 'inactive');
            label.classList.add('inactive');
        });

        if (temporadaOverlay) {
            temporadaOverlay.classList.remove('temporada-alta', 'temporada-baja');
        }
    }

    // Exponer función para uso externo
    window.actualizarMapaChepeExpress = actualizarMapaChepeExpress;

    // Función para mostrar días disponibles
    function mostrarDiasDisponibles() {
        if (!diasDisponiblesInfo || !estacionSalida || !estacionSalida.value) return;

        const salida = estacionSalida.value;
        const destino = estacionDestino ? estacionDestino.value : '';

        if (!destino) {
            diasDisponiblesInfo.style.display = 'none';
            return;
        }

        const diasPermitidos = obtenerDiasPermitidosChepeExpress(salida, destino);

        if (diasPermitidos && diasPermitidos.length > 0) {
            const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const diasPermitidosNombres = diasPermitidos.map(d => nombresDias[d]).join(', ');
            diasDisponiblesInfo.innerHTML = `<strong>Días de salida disponibles:</strong> ${diasPermitidosNombres}`;
            diasDisponiblesInfo.style.display = 'block';
        } else {
            diasDisponiblesInfo.style.display = 'none';
        }

        // Mostrar nota para estaciones intermedias
        if (notaEstacion) {
            if (salida !== 'Los Mochis' && salida !== 'Creel' && destino) {
                notaEstacion.style.display = 'block';
            } else {
                notaEstacion.style.display = 'none';
            }
        }
    }

    // Función para validar fecha según días permitidos
    function validarFechaExpress(fecha, mostrarAlerta = true) {
        if (!fecha || !estacionSalida || !estacionSalida.value || !estacionDestino || !estacionDestino.value) {
            return false;
        }

        const diasPermitidos = obtenerDiasPermitidosChepeExpress(estacionSalida.value, estacionDestino.value);
        if (!diasPermitidos || diasPermitidos.length === 0) {
            return true; // No validar si no hay días específicos
        }

        const fechaObj = new Date(fecha + 'T00:00:00');
        const diaSemana = fechaObj.getDay();

        if (!diasPermitidos.includes(diaSemana)) {
            if (mostrarAlerta) {
                const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                const diasPermitidosNombres = diasPermitidos.map(d => nombresDias[d]).join(', ');
                alert(`Para salir desde ${estacionSalida.value}, el Chepe Express solo opera los días: ${diasPermitidosNombres}. Por favor selecciona una fecha válida.`);
                fechaSalidaExpress.value = '';
            }
            return false;
        }

        return true;
    }

    // Variables para instancias de flatpickr del Express
    let fpSalidaExpress = null;
    let fpRegresoExpress = null;

    // Función disable para flatpickr - bloquea días no permitidos + excepción mensual
    function disableSalidaExpress(date) {
        if (!estacionSalida?.value || !estacionDestino?.value) return false;
        let dias = obtenerDiasPermitidosChepeExpress(estacionSalida.value, estacionDestino.value);
        if (!dias) return false;
        // Excepción: Mayo(5), Junio(6), Agosto(8), Septiembre(9) → sin Lunes(1) ni Martes(2)
        const mes = date.getMonth() + 1;
        if ([5, 6, 8, 9].includes(mes)) {
            dias = dias.filter(d => d !== 1 && d !== 2);
        }
        return !dias.includes(date.getDay());
    }

    function disableRegresoExpress(date) {
        if (!estacionDestino?.value || !estacionSalida?.value) return false;
        let dias = obtenerDiasPermitidosChepeExpress(estacionDestino.value, estacionSalida.value);
        if (!dias) return false;
        const mes = date.getMonth() + 1;
        if ([5, 6, 8, 9].includes(mes)) {
            dias = dias.filter(d => d !== 1 && d !== 2);
        }
        return !dias.includes(date.getDay());
    }

    // Manejar cambio de tipo de viaje
    tipoViajeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'redondo') {
                fechaRegresoContainer.style.display = 'block';
                if (fechaRegresoExpress) fechaRegresoExpress.required = true;
            } else {
                fechaRegresoContainer.style.display = 'none';
                if (fechaRegresoExpress) {
                    fechaRegresoExpress.required = false;
                    fpRegresoExpress?.clear();
                }
            }
        });
    });

    // Cambio de estación → actualizar flatpickr y limpiar fechas
    function onEstacionChangeExpress() {
        fpSalidaExpress?.set('disable', [disableSalidaExpress]);
        fpRegresoExpress?.set('disable', [disableRegresoExpress]);
        fpSalidaExpress?.clear();
        fpRegresoExpress?.clear();
        resetearMapa();
        if (mapStatusMessage) mapStatusMessage.style.display = 'none';
        mostrarDiasDisponibles();
    }

    estacionSalida?.addEventListener('change', onEstacionChangeExpress);
    estacionDestino?.addEventListener('change', onEstacionChangeExpress);

    // Inicializar flatpickr - fecha de salida
    fpSalidaExpress = flatpickr(fechaSalidaExpress, {
        locale: flatpickr.l10ns.es,
        minDate: 'today',
        dateFormat: 'Y-m-d',
        disable: [disableSalidaExpress],
        onChange: function (selectedDates, dateStr) {
            if (!dateStr) {
                resetearMapa();
                if (mapStatusMessage) mapStatusMessage.style.display = 'none';
                return;
            }
            if (fpRegresoExpress) {
                fpRegresoExpress.set('minDate', dateStr);
                if (fpRegresoExpress.selectedDates[0] && fpRegresoExpress.selectedDates[0] <= selectedDates[0]) {
                    fpRegresoExpress.clear();
                }
            }
            actualizarIndicadorTemporada(dateStr, temporadaIndicatorExpress);
            actualizarMapaChepeExpress();
        }
    });

    // Inicializar flatpickr - fecha de regreso (si existe)
    if (fechaRegresoExpress) {
        fpRegresoExpress = flatpickr(fechaRegresoExpress, {
            locale: flatpickr.l10ns.es,
            minDate: 'today',
            dateFormat: 'Y-m-d',
            disable: [disableRegresoExpress],
            onChange: function (selectedDates, dateStr) {
                if (!dateStr) return;
                if (fpSalidaExpress?.selectedDates[0] && selectedDates[0] <= fpSalidaExpress.selectedDates[0]) {
                    alert('La fecha de regreso debe ser posterior a la fecha de salida.');
                    fpRegresoExpress.clear();
                }
            }
        });
    }
}

// ===================================
// ANIMACIONES AL HACER SCROLL
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Agregar clase fade-in a elementos que queremos animar
const elementsToAnimate = document.querySelectorAll(`
    .travel-types,
    .essence,
    .destinations,
    .custom-destination,
    .confidence,
    .about
`);

elementsToAnimate.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// ===================================
// DATE PICKER Y FORMATEO DE FECHAS
// ===================================
const fechaInicio = document.getElementById('fecha-inicio');
const fechaFin = document.getElementById('fecha-fin');
const fechasDisplay = document.getElementById('fechas-display');

// Establecer fecha mínima como hoy (local)
const today = new Date().toLocaleDateString('en-CA');
fechaInicio.setAttribute('min', today);
fechaFin.setAttribute('min', today);

// Función para formatear fecha en español
function formatearFecha(fecha) {
    const meses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const fechaObj = new Date(fecha + 'T00:00:00');
    const dia = fechaObj.getDate();
    const mes = meses[fechaObj.getMonth()];
    const año = fechaObj.getFullYear();

    return `${dia} de ${mes} de ${año}`;
}

// Función para determinar si una fecha está en temporada alta
// Temporada ALTA: 1-11 ene | 28 mar - 12 abr | 2 jul - 30 ago | 17 dic - 10 ene (siguiente)
// Temporada BAJA: 12 ene - 27 mar | 16 abr - 28 jun | 3 sep - 15 dic
function esTemporadaAlta(fecha) {
    if (!fecha) return false;

    const fechaObj = new Date(fecha + 'T00:00:00');
    const mes = fechaObj.getMonth() + 1; // 1-12
    const dia = fechaObj.getDate();

    // 1-11 de enero → Alta (incluye el overlap con Navidad/Año Nuevo)
    if (mes === 1 && dia <= 11) return true;

    // 28 de marzo - 12 de abril (Semana Santa) → Alta
    if (mes === 3 && dia >= 28) return true;
    if (mes === 4 && dia <= 12) return true;

    // 2 de julio - 30 de agosto (Verano) → Alta
    if (mes === 7 && dia >= 2) return true;
    if (mes === 8 && dia <= 30) return true;

    // 17 de diciembre - 31 de diciembre (Navidad/Año Nuevo) → Alta
    if (mes === 12 && dia >= 17) return true;

    // Todo lo demás es temporada baja
    return false;
}

// Función para obtener el tipo de temporada
function obtenerTemporada(fecha) {
    return esTemporadaAlta(fecha) ? 'Alta' : 'Baja';
}

// Función para actualizar el indicador de temporada
function actualizarIndicadorTemporada(fecha, indicadorElement) {
    if (!indicadorElement || !fecha) {
        if (indicadorElement) indicadorElement.style.display = 'none';
        return;
    }

    const temporada = obtenerTemporada(fecha);
    indicadorElement.textContent = `Temporada ${temporada.toLowerCase()}`;
    indicadorElement.className = `temporada-indicator ${temporada.toLowerCase()}`;
    indicadorElement.style.display = 'block';
}


function actualizarDisplayFechas() {
    const inicio = fechaInicio.value;
    const fin = fechaFin.value;

    if (inicio && fin) {
        const fechaInicioFormateada = formatearFecha(inicio);
        const fechaFinFormateada = formatearFecha(fin);
        fechasDisplay.textContent = `Del ${fechaInicioFormateada} al ${fechaFinFormateada}`;
        fechasDisplay.style.display = 'block';
    } else if (inicio) {
        fechasDisplay.textContent = `Desde ${formatearFecha(inicio)}`;
        fechasDisplay.style.display = 'block';
    } else {
        fechasDisplay.style.display = 'none';
    }
}

// Validar que fecha fin sea posterior a fecha inicio
fechaInicio.addEventListener('change', () => {
    if (fechaInicio.value) {
        fechaFin.setAttribute('min', fechaInicio.value);
        if (fechaFin.value && fechaFin.value < fechaInicio.value) {
            fechaFin.value = '';
        }
    }
    actualizarDisplayFechas();
});

fechaFin.addEventListener('change', () => {
    if (fechaFin.value && fechaInicio.value && fechaFin.value < fechaInicio.value) {
        alert('La fecha de regreso debe ser posterior o igual a la fecha de inicio.');
        fechaFin.value = '';
        return;
    }
    actualizarDisplayFechas();
});

// ===================================
// VALIDACIÓN Y ENVÍO DE FORMULARIO A WHATSAPP
// ===================================
const quoteForm = document.getElementById('quoteForm');

quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar campos
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const personas = document.getElementById('personas').value;
    const fechaInicioVal = fechaInicio.value;
    const fechaFinVal = fechaFin.value;
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación básica
    if (!nombre || !telefono || !email || !personas || !fechaInicioVal || !fechaFinVal || !mensaje) {
        alert('Por favor, completa todos los campos del formulario.');
        return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validar fechas
    if (fechaFinVal < fechaInicioVal) {
        alert('La fecha de regreso debe ser posterior o igual a la fecha de inicio.');
        return;
    }

    // Formatear fechas para el mensaje
    const fechaInicioFormateada = formatearFecha(fechaInicioVal);
    const fechaFinFormateada = formatearFecha(fechaFinVal);

    // Crear mensaje para WhatsApp
    const mensajeWhatsApp = `Hola, me gustaría cotizar un viaje.

*Datos de contacto:*
• Nombre: ${nombre}
• Teléfono: ${telefono}
• Email: ${email}
• Número de personas: ${personas}

*Fechas aproximadas:*
Del ${fechaInicioFormateada} al ${fechaFinFormateada}

*Detalles del viaje:*
${mensaje}`;

    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

    // Número de WhatsApp (6146018486)
    const numeroWhatsApp = '6146018486';

    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir WhatsApp en nueva ventana
    window.open(urlWhatsApp, '_blank');

    // Opcional: mostrar mensaje de confirmación
    const submitButton = quoteForm.querySelector('.btn-primary');
    const originalText = submitButton.textContent;
    submitButton.textContent = '✓ Enviado';
    submitButton.disabled = true;

    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// ===================================
// EFECTO PARALLAX EN HERO (LIGERO)
// ===================================
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = hero.querySelector('.hero-content');

        if (scrolled < hero.offsetHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight) * 0.5;
        }
    });
}

// ===================================
// MEJORA DE ACCESIBILIDAD
// ===================================
// Cerrar menú móvil al presionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        isMenuOpen = false;
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Prevenir scroll del body cuando el menú móvil está abierto
let isMenuOpen = false;
menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// ===================================
// MODAL DE SELECCIÓN DE TOURS (PAQUETES)
// ===================================
function initToursModal() {
    const modal = document.getElementById('modal-tours-selection');
    if (!modal) return;

    const openBtns = document.querySelectorAll('.open-tours-modal');
    const closeBtn = document.getElementById('close-tours-modal');
    const cancelBtn = document.getElementById('cancel-tours-selection');
    const saveBtn = document.getElementById('save-tours-selection');
    const toursCountInput = document.getElementById('tours-count');
    const tourCheckboxes = document.querySelectorAll('input[name="tour"]');

    // Store selected package
    let currentPackage = '';
    let currentLimit = 15;

    // Open Modal
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentPackage = btn.dataset.package;
            currentLimit = parseInt(btn.dataset.limit) || 15;

            // Set input value and constraints
            if (toursCountInput) {
                toursCountInput.value = currentLimit;
                toursCountInput.max = 15; // Always max 15 tours available

                // Readonly if it's not Bespoke (custom)
                if (currentPackage !== 'Bespoke') {
                    toursCountInput.readOnly = true;
                } else {
                    toursCountInput.readOnly = false;
                }
            }

            // Reset checkboxes
            tourCheckboxes.forEach(cb => {
                cb.checked = false;
                cb.disabled = false;
                cb.parentElement.style.opacity = '1';
            });

            // Open modal using unified function if available, otherwise manual
            if (typeof openModal === 'function') {
                openModal(modal);
            } else {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            // Initial check
            updateCheckboxState();
        });
    });

    // Validar y limitar selección
    function updateCheckboxState() {
        const selectedCount = document.querySelectorAll('input[name="tour"]:checked').length;
        const tourCheckboxes = document.querySelectorAll('input[name="tour"]');

        // Logic for Prime Activity
        const activitySection = document.getElementById('actividad-section');
        if (currentPackage === 'Prime' && activitySection) {
            const barrancasSelected = Array.from(document.querySelectorAll('input[name="tour"]:checked'))
                .some(cb => cb.value === 'Tour Divisadero y Parque Aventura' || cb.value === 'Tour Cañón del Cobre Plus');

            if (barrancasSelected) {
                activitySection.style.display = 'block';
                // Animación leve
                if (activitySection.style.opacity !== '1') {
                    activitySection.style.opacity = '0';
                    activitySection.style.transition = 'opacity 0.5s ease';
                    requestAnimationFrame(() => activitySection.style.opacity = '1');
                }
            } else {
                activitySection.style.display = 'none';
                activitySection.style.opacity = '0';
            }
        } else if (activitySection) {
            activitySection.style.display = 'none';
        }

        // Disable unselected checkboxes if limit reached
        if (selectedCount >= currentLimit) {
            tourCheckboxes.forEach(cb => {
                if (!cb.checked) {
                    cb.disabled = true;
                    cb.parentElement.style.opacity = '0.5';
                }
            });
        } else {
            tourCheckboxes.forEach(cb => {
                cb.disabled = false;
                cb.parentElement.style.opacity = '1';
            });
        }
    }

    // Add change listeners to checkboxes
    tourCheckboxes.forEach(cb => {
        cb.addEventListener('change', updateCheckboxState);
    });

    // Update limit if user changes input manually (for Bespoke)
    if (toursCountInput) {
        toursCountInput.addEventListener('change', (e) => {
            let val = parseInt(e.target.value);
            if (val < 1) val = 1;
            if (val > 15) val = 15;
            e.target.value = val;
            currentLimit = val;
            updateCheckboxState();
        });
    }

    // Handle "Continuar" (Save Selection & Send to WhatsApp)
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const selectedTours = Array.from(document.querySelectorAll('input[name="tour"]:checked')).map(cb => cb.value);
            const selectedTransfers = Array.from(document.querySelectorAll('input[name="transfer"]:checked')).map(cb => cb.value);
            const tourCount = toursCountInput ? toursCountInput.value : 'N/A';
            const selectedActivityInput = document.querySelector('input[name="actividad_prime"]:checked');
            const selectedActivity = selectedActivityInput ? selectedActivityInput.value : '';

            // WhatsApp Logic
            const phoneNumber = '526146018486';
            let message = `Hola, me interesa el paquete: *${currentPackage}*\n\n`;

            if (selectedTours.length > 0) {
                message += `✅ *Tours seleccionados (${selectedTours.length}):*\n`;
                selectedTours.forEach(tour => {
                    message += `- ${tour}\n`;
                });
            } else {
                message += `⚠️ No seleccioné tours específicos.\n`;
            }

            if (selectedTransfers.length > 0) {
                message += `\n🚍 *Traslados:*\n`;
                selectedTransfers.forEach(transfer => {
                    message += `- ${transfer}\n`;
                });
            }

            // Add Activity if Prime
            if (currentPackage === 'Prime' && selectedActivity) {
                message += `\n🎢 *Actividad Premium:* ${selectedActivity}\n`;
            }

            if (currentPackage === 'Bespoke') {
                message += `\n🔢 *Número de tours sugerido:* ${tourCount}\n`;
            }

            message += `\nEspero su respuesta para coordinar desayunos y cenas. Gracias.`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Close modal using unified function if available
            if (typeof closeModal === 'function') {
                closeModal(modal);
            } else {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Close buttons specific to this modal (if not handled by unified system)
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (typeof closeModal === 'function') closeModal(modal);
        });
    }
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            if (typeof closeModal === 'function') closeModal(modal);
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initToursModal);

// ============================================================
// BOSQUE DE PINOS ANIMADO — sección de paquetes
// ============================================================
function initPineBosque() {
    const section = document.querySelector('.premium-packages');
    if (!section) return;

    // Crear canvas
    const canvas = document.createElement('canvas');
    Object.assign(canvas.style, {
        position: 'absolute',
        top: '0', left: '0',
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: '0',
    });
    section.insertBefore(canvas, section.firstChild);

    const ctx = canvas.getContext('2d');

    // Ajustar tamaño al redimensionar
    const ro = new ResizeObserver(() => {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
    });
    ro.observe(section);
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;

    // Paleta de verde bosque
    const GREENS = [
        [47, 85, 38],
        [58, 100, 47],
        [65, 112, 52],
        [38, 72, 32],
        [55, 95, 44],
    ];

    // Generar 30 árboles
    const trees = Array.from({ length: 30 }, (_, i) => {
        // Distribución: concentrar en los laterales (márgenes left/right)
        // y espolvorear algunos en el centro
        let xFrac;
        if (i < 10) {
            xFrac = Math.random() * 0.18;          // margen izquierdo
        } else if (i < 20) {
            xFrac = 0.82 + Math.random() * 0.18;  // margen derecho
        } else {
            xFrac = 0.15 + Math.random() * 0.70;  // centro
        }
        const g = GREENS[i % GREENS.length];
        return {
            xFrac,
            yFrac: 0.05 + Math.random() * 0.90,
            scale: 0.40 + Math.random() * 0.45,
            alpha: 0.22 + Math.random() * 0.16,
            phase: Math.random() * Math.PI * 2,
            freq: 0.35 + Math.random() * 0.55,
            amp: 0.025 + Math.random() * 0.030,
            color: g,
        };
    });

    // Dibujar un pino: base en (0,0), crece hacia arriba
    function drawPine(scale, alpha, rgb) {
        const [r, g, b] = rgb;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.scale(scale, scale);

        // Tier inferior
        ctx.beginPath();
        ctx.moveTo(0, -35); ctx.lineTo(-35, 0); ctx.lineTo(35, 0);
        ctx.closePath(); ctx.fill();

        // Tier medio
        ctx.beginPath();
        ctx.moveTo(0, -68); ctx.lineTo(-27, -28); ctx.lineTo(27, -28);
        ctx.closePath(); ctx.fill();

        // Tier superior
        ctx.beginPath();
        ctx.moveTo(0, -105); ctx.lineTo(-17, -62); ctx.lineTo(17, -62);
        ctx.closePath(); ctx.fill();

        // Tronco
        ctx.globalAlpha = alpha * 0.6;
        ctx.fillStyle = `rgb(70,50,30)`;
        ctx.fillRect(-4, 0, 8, 14);

        ctx.restore();
    }

    function render(ts) {
        const t = ts * 0.001;
        const W = canvas.width;
        const H = canvas.height;
        ctx.clearRect(0, 0, W, H);

        trees.forEach(tr => {
            const x = tr.xFrac * W;
            const y = tr.yFrac * H;
            const angle = Math.sin(t * tr.freq + tr.phase) * tr.amp;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            drawPine(tr.scale, tr.alpha, tr.color);
            ctx.restore();
        });

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

document.addEventListener('DOMContentLoaded', initPineBosque);
