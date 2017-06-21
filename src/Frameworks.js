import THREE from "n3d-threejs"

class Frameworks {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({alpha : true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      45, //Field Of View (45도)
      window.innerWidth / window.innerHeight, //Ratio oF ViewPort (화면 비율)
      1.0, //Near Plane (표현가능 최소 거리)
      1000.0 //Far Plane (표현가능 최대 거리)
    );
    this.camera.position.z = 50.0;

    //Create Scene
    this.scene = new THREE.Scene();

    //liquid or floor
    this.regist = new THREE.Object3D();
    this.regist.add(new THREE.Mesh(
      new THREE.PlaneGeometry(2.0, 2.0),
      new THREE.MeshBasicMaterial({ color : "blue"})
    ));
    this.regist.position.y = -20.0;
    this.regist.position.z = -0.1;
    this.regist.scale.y = 5.0;
    this.regist.scale.x = 100.0;

    //Create Object
    this.object = new THREE.Object3D();
    this.object.add(new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 10.0, 10.0, 10.0),
      new THREE.MeshBasicMaterial({ color : "red" })
    ));


    //Add Object to Scene
    this.scene.add(this.object);
    this.scene.add(this.regist);
    //힘
    this.force = new THREE.Vector3(0.0, 0.0, 0.0);

    //객체의 질량
    this.object.mass = 1.0;

    //객체의 가속도
    this.object.acceleration = new THREE.Vector3();

    //객체의 속도
    this.object.velocity = new THREE.Vector3(5.0, 7.0, 0.0);

  }



  //등가속도 운동
  _updateForce1() {
    //중력 등가속도 운동
    this.force.x = 0.0;
    this.force.y = -9.8;

    //바닥 적용 (작용 반작용 적용)
    if(this.object.position.y < - 15.0) {
      this.object.position.y = -15.0;
      this.object.velocity.y *= -1;
    }
    if(Math.abs(this.object.position.x) > 20.0) {
      this.object.position.x = Math.sign(this.object.position.x) * 20.0;
      this.object.velocity.x *= -1;
    }
  }

  //마찰력
  _updateForce2() {
    this.object.position.y = -15.0;

    if(Math.abs(this.object.position.x) > 20.0) {
      this.object.position.x = Math.sign(this.object.position.x) * 20.0;
      this.object.velocity.x *= -1;
    }

    const map_mew = 0.1;
    var nr = new THREE.Vector3(this.object.velocity.x, this.object.velocity.y, this.object.velocity.z);
    nr = nr.normalize();

    //마찰력
    this.force.x = - map_mew * nr.x;
    this.force.y = - map_mew * nr.y;
    this.force.z = - map_mew * nr.z;
  }

  //유체 저항
  _updateForce3() {
    //중력 등가속도 운동
    this.force.x = 0.0;
    this.force.y = -9.8;
    this.force.z = 0.0;

    const liquid_mew = 2.0;

    //수면 적용 (작용 반작용 적용)
    if(this.object.position.y < - 15.0) {
      const sv = this.object.velocity.length();
      var nr = new THREE.Vector3(this.object.velocity.x, this.object.velocity.y, this.object.velocity.z);
      nr = nr.normalize();

      this.force.x += - sv * sv * liquid_mew * nr.x;
      this.force.y += - sv * sv * liquid_mew * nr.y;
      this.force.z += - sv * sv * liquid_mew * nr.z;
    }
  }

  //원점을 기준으로 만유인력
  _updateForce4() {
    const gravity_const = 1;
    // this.force.x = -gravity_const / this.object.position.x;
    // this.force.y = -gravity_const / this.object.position.y;
    // this.force.z = -gravity_const / this.object.position.z;
  }

  update(dt) {
    this._updateForce3();

    this.object.acceleration.x = this.force.x / this.object.mass;
    this.object.acceleration.y = this.force.y / this.object.mass;
    this.object.acceleration.z = this.force.z / this.object.mass;

    this.object.velocity.x += this.object.acceleration.x * dt;
    this.object.velocity.y += this.object.acceleration.y * dt;
    this.object.velocity.z += this.object.acceleration.z * dt;

    this.object.position.x += this.object.velocity.x * dt;
    this.object.position.y += this.object.velocity.y * dt;
    this.object.position.z += this.object.velocity.z * dt;



  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default Frameworks
