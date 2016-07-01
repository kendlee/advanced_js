var foreverYoungMembers = ['Rovelle', 'Herbert', 'Chichi'];
var lms = ['OJ', 'Carlo', 'Milet'];

function GreeterComponent (names) {
    var wrapper = createComponentWrapper();
    var namelist = names;
    updateGreeter();
    return wrapper;

    function createComponentWrapper() {
        var wrapper = document.createElement('div');
        wrapper.greeter = createGreeterElement();
        wrapper.appendChild(wrapper.greeter);
        wrapper.appendChild(createRandomizer());
        return wrapper;
    }

    function createGreeterElement () {
        return document.createElement('div');
    }

    function createRandomizer () {
        var button = document.createElement('button');
        button.innerHTML = "Refresh";
        button.addEventListener('click', updateGreeter);
        return button;
    }

    function updateGreeter () {
        return wrapper.greeter.innerHTML = 'Hi ' + getRandomName() + '!';
    }

    function getRandomName() {
        return namelist[Math.floor(Math.random() * namelist.length)];
    }
}

document.querySelector('body').appendChild(new GreeterComponent(foreverYoungMembers));
document.querySelector('body').appendChild(new GreeterComponent(lms));