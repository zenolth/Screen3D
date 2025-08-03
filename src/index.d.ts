interface component3D<T extends GuiObject> {
    enabled : boolean;
			
    component2D : T;
    surfaceGui : SurfaceGui;
    
    parent2D : GuiObject | undefined;
    screen3D : screen3D,
    parent3D : component3D<GuiObject> | undefined,

    offset : CFrame,
    viewportSize : Vector2,

    conn : RBXScriptConnection | undefined;

    Enable(): component3D<T>;
	Disable(): component3D<T>;
	RecomputeParent(): void;
	
	GetStudsScreenSize(viewportSize : Vector2): Vector3;
	ReadWorldCFrame(): CFrame;
	UDim2ToCFrame(position2D : UDim2): CFrame;
	GetViewportSize(): CFrame;
}

interface componentGen<T extends GuiObject> {
    new(Component2D: GuiObject, Screen3D: screen3D): component3D<T>;
}

interface screen3D {
    partIndex : Map<GuiObject,component3D<GuiObject>>,
    rootGui : ScreenGui,
    displayDistance : number,
    rootOffset : CFrame

    GetComponent3D<T extends GuiObject>(Component2D: T): component3D<T>;
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