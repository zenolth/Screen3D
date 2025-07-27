interface componentGen {
    enabled : boolean;
			
    component2D : GuiObject | undefined;
    surfaceGui : SurfaceGui | undefined;
    
    parent2D : GuiObject | undefined;
    screen3D : screenGen,
    parent3D : componentGen | undefined,

    offset : CFrame,
    viewportSize : Vector2,

    conn : RBXScriptConnection | undefined;

    Enable(): componentGen;
	Disable(): componentGen;
	RecomputeParent(): void;
	
	GetStudsScreenSize(viewportSize : Vector2): Vector3;
	ReadWorldCFrame(): CFrame;
	UDim2ToCFrame(position2D : UDim2): CFrame;
	GetViewportSize(): CFrame;
}

interface componentConstructor {
    new(Component2D: GuiObject, Screen3D: screenGen): componentGen;
}

interface screenGen {
    partIndex : Map<GuiObject,any>,
    rootGui : ScreenGui,
    displayDistance : number,
    rootOffset : CFrame

    GetComponent3D(Component2D: GuiObject): any;
    GetRealCanvasSize(): Vector2;
	GetInsetCanvasSize(): Vector2;
	GetIntendedCanvasSize(): Vector2;
	GetInset(): Vector2;
}

interface screenGenConstructor {
    new(screenGui: ScreenGui, displayDistance: number): screenGen;
}

declare const screenGen: screenGenConstructor;
export = screenGen;