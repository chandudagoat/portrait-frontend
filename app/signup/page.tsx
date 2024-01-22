"use client";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";
import { useEffect } from "react";
import * as three from "three";

const SignUp = () => {
  useEffect(() => {
    const scene = new three.Scene();
    scene.background = new three.Color(0xf3e9d2);

    const camera = new three.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    camera.position.z = 96;
    const canvas = document.getElementById("threed")!;
    const renderer = new three.WebGLRenderer({
      canvas,
      antialias: true,
    });

    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    document.body.appendChild(renderer.domElement);

    const ambient_light = new three.AmbientLight(0xffffff, 0.5);
    ambient_light.castShadow = true;
    scene.add(ambient_light);

    const spotlight = new three.SpotLight(0xffffff, 1);
    spotlight.castShadow = true;
    spotlight.position.set(0, 64, 32);
    scene.add(spotlight);

    const circle1 = new three.SphereGeometry(30);
    const circle2 = new three.SphereGeometry(15);
    const circle3 = new three.SphereGeometry(15);
    const material = new three.MeshBasicMaterial({
      color: 0x88d498,
      wireframe: true,
    });
    const circle1_mesh = new three.Mesh(circle1, material);
    const circle2_mesh = new three.Mesh(circle2, material);
    const circle3_mesh = new three.Mesh(circle3, material);
    circle2_mesh.position.x = -20;
    circle2_mesh.position.y = -10;
    circle2_mesh.position.z = 30;

    circle3_mesh.position.x = 20;
    circle3_mesh.position.y = -10;
    circle3_mesh.position.z = 30;

    scene.add(circle1_mesh);
    scene.add(circle2_mesh);
    scene.add(circle3_mesh);

    const animate = () => {
      circle1_mesh.rotation.x += 0.01;
      circle2_mesh.rotation.y += 0.01;
      circle3_mesh.rotation.z += 0.01;

      circle1_mesh.translateY(-0.01);
      circle2_mesh.translateX(-0.01);
      circle3_mesh.translateY(-0.01);

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);
  return (
    <div>
      <form action="POST" className="w-full bg-red-600 flex flex-col items-end">
        <div className="w-1/2 flex items-center mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="">Email</label>
            <Input type="email" placeholder="email" className="w-full" />
          </div>
          <div className="w-1/2">
            <label>Password</label>
            <Input type="password" placeholder="password" className="w-full" />
          </div>
        </div>
        <button
          type="submit"
          className="w-1/2 h-14 bg-[#88D498] rounded-md font-bold text-white transition ease-in-out delay-150 hover:text-[#F3E9D2] hover:bg-[#1A936F]"
        >
          Sign Up
        </button>
      </form>

      <canvas id="threed" />
    </div>
  );
};

export default SignUp;
