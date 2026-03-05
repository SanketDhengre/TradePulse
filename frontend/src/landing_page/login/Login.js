import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch("http://localhost:3002/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) return setError(data.error || "Login failed");
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/");
        } catch (err) {
            setError("Network error");
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '85vh', alignItems: 'center', justifyContent: 'center' }}>
            <div className="card p-5" style={{ 
                maxWidth: '440px', 
                width: '100%', 
                backgroundColor: 'rgba(10, 10, 10, 0.9)', 
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.02)'
            }}>
                <div className="text-center mb-5">
                    <h2 style={{ fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '8px' }}>Welcome back</h2>
                    <p className="text-muted" style={{ fontSize: '0.95rem' }}>Enter your details to access your dashboard.</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 500, color: '#a1a1aa', marginBottom: '8px' }}>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ padding: '12px 16px', fontSize: '0.95rem', borderRadius: '8px' }}
                        />
                    </div>
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="form-label mb-0" style={{ fontSize: '0.85rem', fontWeight: 500, color: '#a1a1aa' }}>Password</label>
                            <a href="#" style={{ fontSize: '0.8rem', color: 'var(--accent-blue)' }}>Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            className="form-control mt-2"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ padding: '12px 16px', fontSize: '0.95rem', borderRadius: '8px' }}
                        />
                    </div>
                    {error && <div style={{ color: 'var(--accent-red)', fontSize: '0.85rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.2)' }} className="mb-4 text-center">{error}</div>}
                    <button className="btn w-100" type="submit" style={{ 
                        backgroundColor: '#fff', 
                        color: '#000', 
                        padding: '12px', 
                        borderRadius: '8px',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease',
                        border: 'none',
                        boxShadow: '0 4px 14px 0 rgba(255,255,255,0.1)'
                    }}>
                        Sign in
                    </button>
                </form>
                
                <div className="text-center mt-4">
                    <p style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>
                        Don't have an account? <Link to="/signup" style={{ color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
