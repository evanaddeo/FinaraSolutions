// Helper function to add & remove styling from CustomDropdown selector
export function updateDropdown2() {
    const dropdown2 = document.getElementById('dropdown2');
    dropdown2.classList.add('select-border');

    document.addEventListener('click', (e) => {
        if (e.target !== dropdown2 && !dropdown2.contains(e.target)) {
            dropdown2.classList.remove('select-border');
        }
    });
}

// Helper function to add & remove styling from CustomDropdown selector
export function updateDropdown1() {
    const dropdown1 = document.getElementById('dropdown1');
    dropdown1.classList.add('select-border');

    document.addEventListener('click', (e) => {
        if (e.target !== dropdown1 && !dropdown1.contains(e.target)) {
            dropdown1.classList.remove('select-border');
        }
    });
};

// Helper function to confirm/deny signup
//
// @param signupInfo: ordered list of user-entered data for signup fields
//
// @return success: Boolean 'True' if criteria passed, 'False' otherwise
// @return msg: Error msg if necessary
// @return failField: string indicating where signup failed, if necessary
export function signupAuth(signupInfo) {
    const { firstName, lastName, email, phoneNumber, password, 
            confirmPassword, state, country, } = signupInfo;

    // Check if any field is empty
    if (!firstName || !lastName || !email || !phoneNumber ||
        !password || !confirmPassword || !state || !country) {

        return{success: false, msg: 'All fields are required.', failField: ''};
    }

    // Validate first name and last name (Only alphabet chars)
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstName)) { 
        return{success: false, msg: 'Invalid First Name', failField: 'first'} 
    }
    if (!nameRegex.test(lastName)) { 
        return{success: false, msg: 'Invalid Last Name', failField: 'last'} 
    }

    // Validate email (must contain '@')
    if (!email.includes("@")) {
        return{success: false, msg: 'Invalid Email Address', failField: 'email'};
    }

    // Validate phone number (must be numeric and 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        return{success: false, msg: 'Invalid Phone Number', failField: 'phone'};
    }       

    // Validate password (minimum 8 characters, at least one uppercase, one lowercase, one digit, and one special character)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordRegex.test(password)) {
        return{
            success: false, 
            msg: 'Invalid Password - 8-16 characters, at least one uppercase, one lowercase, one numeric digits, and one special character required', 
            failField: 'password'
        };
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        return{success: false, msg: 'Passwords must match', failField: 'confirmPassword'};
    }

    // No errors detected, proceed with signup
    return {success: true, msg: '', failField: ''};
};

// Helper function to confirm/deny login
//
// @param loginInfo: ordered list of user-entered data for login fields
//
// @return success: Boolean 'True' if criteria passed, 'False' otherwise
// @return msg: Error msg if necessary
// @return failField: string indicating where login failed, if necessary
export function loginAuth(loginInfo) {
    return {success: false, msg: 'No account exists with this email', failField: 'email'}
};