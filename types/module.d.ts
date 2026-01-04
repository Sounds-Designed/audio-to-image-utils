type BasePathGeneratorOptions = {
  channel: number;
  samples: number;
  top: number;
  left: number;
  animation: boolean;
  frames: number;
  normalize: boolean;
  svgPaths: LinearSVGPathData[];
  type: "bars" | "mirror" | "steps";
};

type GetAnimationFramesFromAudioBufferOptions = {
  animation: boolean;
  channel: number;
  frames: number;
};

type LinearPathOptions = BasePathGeneratorOptions & {
  height: number;
  width: number;
};

type PolarPathOptions = BasePathGeneratorOptions & {
  distance: number;
  length: number;
  startDegrees: number;
  endDegrees: number;
  invertDegrees: boolean;
  invertPath: boolean;
};

type SVGPathData = {
  d: string;
  x?: number;
  y?: number;
  ex?: number;
  ey?: number;
  rx?: number;
  ry?: number;
  sx?: number;
  sy?: number;
  angle?: number;
  arc?: number;
  minshow?: number;
  maxshow?: number;
  normalize?: boolean;
  sweep?: number;
};

type LinearSVGPathData = {
  d: string;
  x: number;
  y: number;
  ex: number;
  ey: number;
  rx?: number;
  ry?: number;
  sx: number;
  sy: number;
  angle?: number;
  arc?: number;
  minshow?: number;
  maxshow?: number;
  normalize?: boolean;
  sweep?: number;
};

declare module "@sounds-designed/audio-waveform-utils" {
  export function getAudioBufferFromURL(url: string): Promise<AudioBuffer>;

  export function GetAnimationFramesFromAudioBuffer(
    audioBuffer: AudioBuffer,
    options: Partial<GetAnimationFramesFromAudioBufferOptions>
  ): Array<Float32Array>;
}
