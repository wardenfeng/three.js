namespace THREE
{
	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	export function InstancedMesh(geometry, material, count)
	{

		Mesh.call(this, geometry, material);

		this.instanceMatrix = new BufferAttribute(new Float32Array(count * 16), 16);

		this.count = count;

	}

	InstancedMesh.prototype = Object.assign(Object.create(Mesh.prototype), {

		constructor: InstancedMesh,

		isInstancedMesh: true,

		raycast: function () { },

		setMatrixAt: function (index, matrix)
		{

			matrix.toArray(this.instanceMatrix.array, index * 16);

		},

		updateMorphTargets: function () { }

	});

}