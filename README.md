# solid-auth

Using npm link with an external app

To link both of the packages (recommended):

Navigate to the packages directory in solid-auth
Run the command: npm link @solid-auth/solidstart-auth-ui @solid-auth/solidstart-auth-backend

*Note* You can check that this was successful by looking at the node_modules folder. Scroll through the list until you find @solid-auth. Click on it to make sure both packages are listed. 

Navigate to your test app (solid-start-demo)
From the root directory, run the command:

npm link @solid-auth/solidstart-auth-ui @solid-auth/solidstart-auth-backend

*Note* check the node_modules folder to ensure these were linked

Navigate to your test file or create the file where you want to use these packages
Require in both packages 
Execute the file using node <testfile name>



*Note*
The package name needs to be listed after 'npm link'. This can be found in the package.json file within that package. It is NOT the same as the name of the directory.




