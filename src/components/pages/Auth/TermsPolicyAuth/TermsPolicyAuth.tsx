import React from "react";
import './TermsPolicyAuth.scss';
import { Link } from "react-router-dom";

export const TermsPolicyAuth = () => {
	return (
		<p className="terms-policy-auth">
			By proceeding, you agree to our <Link to="">Terms of Use</Link> and <Link to="">Privacy Policy</Link>
		</p>
	)
}

