const fragment = /* glsl */ `
varying vec2 vUv;

void main()
{
    gl_FragColor = vec4(vUv, 0, 1.0);
}
`;

export default fragment;