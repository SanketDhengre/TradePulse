import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch("http://localhost:3002/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await res.json();
            if (!res.ok) return setError(data.error || "Signup failed");
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            
            // Redirect to trading dashboard port (3008) and pass auth tokens securely via url params
            window.location.href = `http://localhost:3008/?token=${data.token}&user=${encodeURIComponent(JSON.stringify(data.user))}`;
        } catch (err) {
            setError("Network error");
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '85vh', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}>
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
                    <h2 style={{ fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '8px' }}>Create an account</h2>
                    <p className="text-muted" style={{ fontSize: '0.95rem' }}>Start your trading journey with TradePulse.</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 500, color: '#a1a1aa', marginBottom: '8px' }}>Full name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ padding: '12px 16px', fontSize: '0.95rem', borderRadius: '8px' }}
                        />
                    </div>
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
                        <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 500, color: '#a1a1aa', marginBottom: '8px' }}>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Create a strong password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ padding: '12px 16px', fontSize: '0.95rem', borderRadius: '8px' }}
                        />
                        <div className="mt-2 text-muted" style={{ fontSize: '0.75rem' }}>Must be at least 8 characters long.</div>
                    </div>
                    {error && <div style={{ color: 'var(--accent-red)', fontSize: '0.85rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.2)' }} className="mb-4 text-center">{error}</div>}
                    <button className="btn w-100 mt-2" type="submit" style={{ 
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
                        Get started
                    </button>
                </form>
                
                <div className="text-center mt-4">
                    <p style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}>Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
