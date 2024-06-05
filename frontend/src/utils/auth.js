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
export function signupAuth() {
    // signup auth
}

export function loginAuth() {
    // login auth
}