# solid-auth

## Server

This should be a basic description of the server package.

[Server README](./packages/server/README.md)

## UI

This should be a basic description of the UI package.

[Server README](./packages/UI/README.md)

## Dev setup

### Using npm link with an external app

#### In solid-auth (this repo):

Navigate to `packages/server` or `packages/ui` and run `npm link` (do both to link both packages)

_Note_ You can check that this was successful by looking at the node_modules folder. Scroll through the list until you find @solid-auth. Click on it to make sure both packages are listed.

#### In your app (external repo):

From root, run: `npm link @solid-auth/server @solid-auth/ui`

_Note_ check the node_modules folder to ensure these were linked
