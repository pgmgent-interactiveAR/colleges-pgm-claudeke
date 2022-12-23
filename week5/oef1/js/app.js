const startXRButton = document.querySelector('#startWebXR');

const activateXr = async () => {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const gl = canvas.getContext('webgl', {
        xrCompatible: true
    });
    createScene();
}

const createScene = () => {
    const scene = new THREE.Scene();
    const materials = [
        new THREE.MeshBasicMaterial({
            color: 0xff0000
        }),
        new THREE.MeshBasicMaterial({
            color: 0x0000ff
        }),
        new THREE.MeshBasicMaterial({
            color: 0x00ff00
        }),
        new THREE.MeshBasicMaterial({
            color: 0xff00ff
        }),
        new THREE.MeshBasicMaterial({
            color: 0x00ffff
        }),
        new THREE.MeshBasicMaterial({
            color: 0xffff00
        }),
    ];

    const cube = new THREE.Mesh(
        new THREE.BoxBufferGeometry(.2, .2, .2),
        materials
    );
    cube.position.set(1, 1, 1)
}

// Set up the WebGLRenderer, which handles rendering to the session's base layer.
const renderer = new THREE.WebGLRenderer({
    alpha: true,
    preserveDrawingBuffer: true,
    canvas: canvas,
    context: gl
});
renderer.autoClear = false;

// The API directly updates the camera matrices.
// Disable matrix auto updates so three.js doesn't attempt
// to handle the matrices independently.
const camera = new THREE.PerspectiveCamera();camera.matrixAutoUpdate = false;

startXRButton.addEventListener('click', activateXr);