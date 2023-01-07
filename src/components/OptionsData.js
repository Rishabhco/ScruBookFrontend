const gender = [
    { title: 'Male', id: 1 },
    { title: 'Female', id: 2 },
];

const anteriorSegment = [
    { title: 'Immature Cataract', id: 1 },
    { title: 'Mature Cataract', id: 2 },
    { title: 'Hypermature Cataract', id: 3 },
    { title: 'Brown Cataract', id: 4 },
    { title: 'Soft Cataract', id: 5 },
    { title: 'Pseudoexfoliation', id: 6 },
    { title: 'Posterior Polar Cataract', id: 7 },
    { title: 'Phacodonesis', id: 8 },
    { title: 'Small Pupil', id: 9 },
    { title: 'Others', id: 10 },
];

const posteriorSegment = [
    { title: 'Retina Related', id: 1 },
    { title: 'Glaucoma Related', id: 2 },
    { title: 'Neuro Related', id: 3 },
    { title: 'Others', id: 4 },
];

const systemicDiagnosis = [
    { title: 'Hypertension', id: 1 },
    { title: 'Diabetes', id: 2 },
    { title: 'Cardiac', id: 3 },
    { title: 'Hyperlipidemia', id: 4},
    { title: 'Asthma', id: 5},
    { title: 'Others', id: 6},
];

const eyeOfSurgery = [
    { title: 'Left Eye', id: 1 },
    { title: 'Right Eye', id: 2 },
];

const typeOfSurgery = [
    { title: 'ECCE', id: 1 },
    { title: 'SICS', id: 2 },
    { title: 'PHACO', id: 3 },
];

const OPVision = [
    { title: '6/6', id: 1 },
    { title: '6/9', id: 2 },
    { title: '6/12', id: 3 },
    { title: '6/18', id: 4 },
    { title: '6/24', id: 5 },
    { title: '6/36', id: 6 },
    { title: '6/60', id: 7 },
    { title: '5/60', id: 8 },
    { title: '4/60', id: 9},
    { title: '3/60', id: 10 },
    { title: '2/60', id: 11},
    { title: '1/60', id: 12 },
    { title: 'HM', id: 13 },
    { title: 'PL+', id: 14 },
    { title: 'NLP', id: 15 },
];

const complicationsIntraArray = [
    { title: 'Buttonhole Tunnel', id: 1 },
    { title: 'Premature Entry', id: 2 },
    { title: 'Scleral Dissinsertion', id: 3 },
    { title: 'Small Rhexis', id: 4 },
    { title: 'Rhexis Extension', id: 5 },
    { title: 'Posterior Capsular Rent', id: 6 },
    { title: 'Zonular Dehiscence', id: 7 },
    { title: 'Supra Choroidal Hemorrhage', id: 8 },
    { title: 'Descement membrane detachment', id: 9 },
    { title: 'Whole Bag Removal', id: 10 },
    { title: 'NO IOL', id: 11 },
    { title: 'No vitreous disturbance', id: 12 },
    { title: 'Vitreous disturbance', id: 13 },
    { title: 'Nucleus drop', id: 14 },
    { title: 'iridodialysis', id: 15 },
    { title: 'Shallow AC', id: 16 },
    { title: 'OTHERS', id: 17 },
    
];

const complicationsPostDayArray = [
    { title: 'Striate Keratopathy', id: 1 },
    { title: 'epithelial edema', id: 2 },    
    { title: 'hyphema', id: 3 },   
    { title: 'IOL dislocated', id: 4 },   
    { title: 'Residual cortex', id: 5 },   
    { title: 'haptic in AC', id: 6 },   
    { title: 'Aphakia', id: 7 },   
    { title: 'Descement membrane detachment', id: 8 },    
    { title: 'postop uveitis', id: 9 },    
    { title: 'blood clot', id: 10 },    
    { title: 'Endophthalmitis', id: 11 },    
    { title: 'OTHERS', id: 12 },    

];

const assisstedStepArray = [
    { title: 'peritomy', id: 1 },
    { title: 'incision', id: 2 },
    { title: 'Tunnel', id: 3 },
    { title: 'sideport', id: 4 },
    { title: 'Keratome entry', id:5  },
    { title: 'Rhexis', id: 6 },
    { title: 'hydrodissection', id:7  },
    { title: 'prolapse of nucleus', id:8  },
    { title: 'Delivery of nucleus', id: 9 },
    { title: 'cortex wash', id: 10 },
    { title: 'IOL implantation', id:11  },
    { title: 'conjunctival closure', id:12  },
];

export{
    gender,
    anteriorSegment,
    posteriorSegment,
    systemicDiagnosis,
    eyeOfSurgery,
    typeOfSurgery,
    OPVision,
    complicationsIntraArray,
    complicationsPostDayArray,
    assisstedStepArray
};