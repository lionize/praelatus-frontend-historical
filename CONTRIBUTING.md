# Contribution Guidelines

## There are multiple ways to contribute to the project

- Submitting bugs or feature requests! For now you can drop us a line on Github
issues [here](https://github.com/praelatus/backend/issues)

- Write documentation, we always need documentation contributions whether that
be in the form of localization, spell check, or net new documentation. For
information on this you can check out our [wiki](https://github.com/praelatus/backend/wiki)

- Code submissions, we of course always need more code written in the forms of
new features or bugs.

As always for all of the above please follow our [Code of Conduct](https://github.com/chasinglogic/praelatus/blob/master/CODE_OF_CONDUCT.md)

## General Contribution Guidelines

If you're planning on working on something make sure you open an issue or claim an existing one. This helps everyone on the project, it helps us know what everyone is working on (avoiding double work) and also helps us prevent you from working on something that maybe isn't a good fit for Praelatus which will save everyone time.

If you'd like to tackle an existing issue just add a comment claiming the ticket for yourself and we will leave it alone. If you comment on an issue but do not update the issue again in 7 days
we will assume that you've abandoned work.

**NOTE:** This does not mean you
need to resolve the issue in 7 days only that you need to update it so we know you have not abandoned working on the issue.

## Code Contribution Guidelines

1. All code must be passed through `go fmt`
2. All code must have tests. Unit tests are preferred and integration tests are allowed where appropriate.
3. All tests must be passing on the CI system before a PR will be accepted.
4. If your code breaks some other package feel free to adjust the other package.

Documentation for building Praelatus can be found [here](https://github.com/praelatus/backend/wiki/Building-Praelatus-from-Source)

## Bug Report Guidelines

Bug reports are welcomed and if you're not sure if the issue you're experiencing is a bug or not, report it anyway.

All good bug reports consist of a few things and we greatly appreciate if you can include as many of these items as possible:

1. A detailed description of the problem.
    - "Opening a ticket does not work" is not a great description "Opening a ticket from any screen fails" is much better because this tells us that you are unable to open a ticket in any available method.
2. How to repeat the issue.
    - If we are unable to reproduce the issue it becomes impossible to solve, any configs or environment specific items you can include gives us much needed information in solving your problem.
3. Any error messages you encounter.
    - If you can send us the error messages you get from the app itself or in your logs that goes a long way to telling us what's going wrong.

## Feature Request Guidelines

Feature requests are always welcome as we want to make Praelatus the best it can be. In keeping with that theme we have a few guidelines for creating Feature requests

1. All feature requests should clearly define a scope with a clear "done" state. Meaning that the sentence "When Praelatus does X then Y feature will be considered complete." can be applied to it.
2. All feature requests will go through a comment period (minimum of 7 days) before being worked and at least two project maintainers will sign off as having approved the feature for work.
