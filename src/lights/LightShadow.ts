namespace THREE
{

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	export class LightShadow
	{
		_viewportCount: any;
		_frustum: any;
		camera: any;
		matrix: any;
		bias: number;
		radius: number;
		mapSize: any;
		map: any;
		mapPass: any;
		_frameExtents: any;
		_viewports: any[];
		constructor(camera?)
		{

			this.camera = camera;

			this.bias = 0;
			this.radius = 1;

			this.mapSize = new Vector2(512, 512);

			this.map = null;
			this.mapPass = null;
			this.matrix = new Matrix4();

			this._frustum = new Frustum();
			this._frameExtents = new Vector2(1, 1);

			this._viewportCount = 1;

			this._viewports = [

				new Vector4(0, 0, 1, 1)

			];

		}

		_projScreenMatrix = new Matrix4()

		_lightPositionWorld = new Vector3()

		_lookTarget = new Vector3()

		getViewportCount()
		{

			return this._viewportCount;

		}

		getFrustum()
		{

			return this._frustum;

		}

		updateMatrices(light)
		{

			var shadowCamera = this.camera,
				shadowMatrix = this.matrix,
				projScreenMatrix = this._projScreenMatrix,
				lookTarget = this._lookTarget,
				lightPositionWorld = this._lightPositionWorld;

			lightPositionWorld.setFromMatrixPosition(light.matrixWorld);
			shadowCamera.position.copy(lightPositionWorld);

			lookTarget.setFromMatrixPosition(light.target.matrixWorld);
			shadowCamera.lookAt(lookTarget);
			shadowCamera.updateMatrixWorld();

			projScreenMatrix.multiplyMatrices(shadowCamera.projectionMatrix, shadowCamera.matrixWorldInverse);
			this._frustum.setFromMatrix(projScreenMatrix);

			shadowMatrix.set(
				0.5, 0.0, 0.0, 0.5,
				0.0, 0.5, 0.0, 0.5,
				0.0, 0.0, 0.5, 0.5,
				0.0, 0.0, 0.0, 1.0
			);

			shadowMatrix.multiply(shadowCamera.projectionMatrix);
			shadowMatrix.multiply(shadowCamera.matrixWorldInverse);

		}

		getViewport(viewportIndex)
		{

			return this._viewports[viewportIndex];

		}

		getFrameExtents()
		{

			return this._frameExtents;

		}

		copy(source)
		{

			this.camera = source.camera.clone();

			this.bias = source.bias;
			this.radius = source.radius;

			this.mapSize.copy(source.mapSize);

			return this;

		}

		clone()
		{

			return new LightShadow().copy(this);

		}

		toJSON()
		{

			var object: any = {};

			if (this.bias !== 0) object.bias = this.bias;
			if (this.radius !== 1) object.radius = this.radius;
			if (this.mapSize.x !== 512 || this.mapSize.y !== 512) object.mapSize = this.mapSize.toArray();

			object.camera = this.camera.toJSON(false).object;
			delete object.camera.matrix;

			return object;

		}
	}




}