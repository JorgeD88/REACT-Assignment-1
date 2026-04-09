import React, { useEffect, useState } from "react";
import Greeting from "./Greeting";
import UserInfo from "./UserInfo";
import TaskComponent from "./TaskComponent";
import TaskForm from "./TaskForm";
import { auth, db } from "./firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  serverTimestamp
} from "firebase/firestore";

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const q = query(
          collection(db, "tasks"),
          where("userId", "==", currentUser.uid)
        );

        const unsubscribeTasks = onSnapshot(q, (snapshot) => {
          const taskList = snapshot.docs.map((docItem) => ({
            id: docItem.id,
            ...docItem.data()
          }));
          setTasks(taskList);
        });

        return () => unsubscribeTasks();
      } else {
        setTasks([]);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  async function handleSignUp() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully.");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully.");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      alert("Logged out successfully.");
    } catch (error) {
      alert(error.message);
    }
  }

  async function addTask(newTask) {
    if (!user) return;

    try {
      await addDoc(collection(db, "tasks"), {
        userId: user.uid,
        taskName: newTask.name,
        taskDescription: newTask.description,
        createdAt: serverTimestamp()
      });
    } catch (error) {
      alert("Error adding task: " + error.message);
    }
  }

  async function deleteTask(id) {
    try {
      await deleteDoc(doc(db, "tasks", id));
    } catch (error) {
      alert("Error deleting task: " + error.message);
    }
  }

  return (
    <div>
      <h1>Task Manager App</h1>

      {!user ? (
        <div>
          <h2>Sign Up or Login</h2>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div>
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      ) : (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>

          <Greeting username={user.email} />
          <UserInfo />
          <TaskForm onAddTask={addTask} />
          <TaskComponent tasks={tasks} onDelete={deleteTask} />
        </div>
      )}
    </div>
  );
}

export default App;
