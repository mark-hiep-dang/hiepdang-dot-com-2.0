import { NeuroNoise, type NeuroNoiseParams, neuroNoisePresets } from '@paper-design/shaders-react';

// export default function NeuroNoiseBackground(props: NeuroNoiseProps) {
    
//     const defaultProps = {        
//         style: { width: '100%', height: '100%' }
//     };

//     const params = neuroNoisePresets[0].params;

//     return <NeuroNoise {...params} {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }}/>;

// }

const NeuroNoiseBG = () => {
    return <NeuroNoise style={{ position: 'fixed', width: '100%', height: '100%' }} />;
}

const NeuroNoiseWithCustoms = () => {
    const params = neuroNoisePresets[0].params;
    params.colorMid = "#00a2ff";
    params.colorFront = "#ffffff";
    params.colorBack="#000000"
    return <NeuroNoise style={{ position: 'fixed', width: '100%', height: '100%' }} {...params}/>;
}

export default NeuroNoiseWithCustoms;