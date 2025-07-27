interface component3D {
    enabled : boolean;
			
    component2D : GuiObject | undefined;
    surfaceGui : SurfaceGui | undefined;
    
    parent2D : GuiObject | undefined;
    screen3D : screen3D,
    parent3D : component3D | undefined,

    offset : CFrame,
    viewportSize : Vector2,

    conn : RBXScriptConnection | undefined;

    Enable(): component3D;
	Disable(): component3D;
	RecomputeParent(): void;
	
	GetStudsScreenSize(viewportSize : Vector2): Vector3;
	ReadWorldCFrame(): CFrame;
	UDim2ToCFrame(position2D : UDim2): CFrame;
	GetViewportSize(): CFrame;
}

interface componentGen {
    new(Component2D: GuiObject, Screen3D: screen3D): component3D;
}

interface screen3D {
    partIndex : Map<GuiObject,component3D>,
    rootGui : ScreenGui,
    displayDistance : number,
    rootOffset : CFrame

    GetComponent3D(Component2D: GuiObject): component3D;
    GetRealCanvasSize(): Vector2;
	GetInsetCanvasSize(): Vector2;
	GetIntendedCanvasSize(): Vector2;
	GetInset(): Vector2;
}

interface screenGen {
    new(screenGui: ScreenGui, displayDistance: number): screen3D;
}

declare const screenGen: screenGen;
export = screenGen;