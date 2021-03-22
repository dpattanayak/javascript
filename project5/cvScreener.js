const userData = [{
        name: 'Mr.Brad Gibson',
        age: 26,
        city: 'kilcoole',
        language: 'Javascript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg'
    },
    {
        name: 'Mr.John Scarrow',
        age: 26,
        city: 'USA',
        language: 'Javascript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/med/men/77.jpg'
    },
    {
        name: 'Mr.Rohan Das',
        age: 26,
        city: 'Chennai',
        language: 'Javascript',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/med/men/65.jpg'
    }
]

cvIterator = (profiles) => {
    let nextIndex = 0;
    return {
        next: () => {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    }
}


const candidates = cvIterator(userData);
const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', () => {
    const currentCandidate = candidates.next().value;
    console.log('currentCandidate: ', currentCandidate);

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {        
        image.innerHTML = `<img class="img img-thumbnail" src='${currentCandidate.image}'>`;
        profile.innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">My name is ${currentCandidate.name}</li>
                <li class="list-group-item">I am ${currentCandidate.age} years old</li>
                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                <li class="list-group-item">Primirily working on ${currentCandidate.language}</li>
                <li class="list-group-item">with ${currentCandidate.framework} framework</li>
            </ul>
        `;
    } else {
        alert('Applications Finished');
        window.location.reload();
    }
});
nextBtn.click();