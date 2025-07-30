## Development

### Setting Up the Development Environment

There are two ways to set up your development environment:

#### Option 1: Using Hatch (Recommended)

[Hatch](https://hatch.pypa.io/) is a modern Python project manager that handles environments, dependencies, and builds.

1. Install Hatch:
```bash
pip install hatch
```

2. Create and enter the development environment:
```bash
# This creates a virtual environment and installs all dependencies
python -m hatch shell
```

The `hatch shell` command:
- Creates an isolated environment
- Installs all development dependencies
- Activates the environment
- Sets up the project in editable mode

**Important Note**: The Hatch shell is for development work only. When you need to build the package, you should exit the Hatch shell first:
```bash
# Exit the Hatch shell
exit

# Build the package from outside the Hatch shell
hatch build
```

#### Option 2: Using venv

If you prefer using Python's built-in virtual environment:

1. Create and activate a virtual environment:
```bash
# Create a virtual environment
python -m venv .venv

# Activate the virtual environment
# On Windows:
.venv\Scripts\activate
# On Unix-like systems (Linux/macOS):
source .venv/bin/activate
```

2. Install development dependencies:
```bash
# Install the package in editable mode with development dependencies
pip install -e ".[dev]"
```

### Key Differences

- **Hatch Shell**:
  - Manages the entire project lifecycle
  - Automatically handles dependency installation
  - Provides consistent environments across team members
  - Environment is project-specific and managed by Hatch
  - Use for development, testing, and running code
  - Exit the shell before running `hatch build`

- **venv**:
  - Python's built-in virtual environment tool
  - More manual control over the environment
  - Requires explicit dependency installation
  - Environment is managed by you
  - More familiar to Python developers

### Development Workflow

1. Start development:
```bash
# Enter the Hatch shell for development
python -m hatch shell
```

2. Make your changes and run tests:
```bash
# Run tests
pytest

# Run linters
ruff check .
```

3. Build the package:
```bash
# First exit the Hatch shell
exit

# Then build the package
hatch build
```

4. If you need to make more changes, repeat from step 1.

### IDE Configuration

If your IDE shows import errors (like "Import could not be resolved") even after installing dependencies, you may need to configure your IDE to use the correct Python interpreter:

#### VS Code
1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
2. Type "Python: Select Interpreter"
3. Choose the interpreter from your Hatch environment (it should be something like `hatch/virtual/default/Scripts/python.exe` on Windows or `hatch/virtual/default/bin/python` on Unix-like systems)

#### PyCharm
1. Go to `File > Settings > Project > Python Interpreter` (Windows/Linux) or `PyCharm > Preferences > Project > Python Interpreter` (macOS)
2. Click the gear icon and select "Add"
3. Choose "Existing Environment" and select the Python interpreter from your Hatch environment at `hatch/virtual/default/Scripts/python.exe` (Windows) or `hatch/virtual/default/bin/python` (Unix-like systems)

#### General Tips
- Make sure your IDE's Python extension is installed and up to date
- Try reloading your IDE window after selecting the correct interpreter
- If using VS Code, you might need to install the Pylance extension for better Python support

### Running Tests

```bash
# Run all tests
pytest

# Run tests with coverage
pytest --cov=uxly_1shot_client
```

### Code Style

The project uses:
- Black for code formatting
- isort for import sorting
- flake8 for linting
- mypy for type checking

You can run these tools manually:
```bash
# Format code
black src tests

# Sort imports
isort src tests

# Run linter
flake8 src tests

# Check types
mypy src tests
```

Or use pre-commit to run them automatically on commit:
```bash
pre-commit run --all-files
```

## Publishing

This package is published to PyPI using modern Python packaging tools. Here's how to publish a new version:

1. Install the required tools globally (outside of any virtual environment):
```bash
# Install twine globally
pip install twine

# Install hatch and hatchling if you haven't already
pip install hatch hatchling
```

2. Update the version in `pyproject.toml`:
```toml
[project]
version = "0.1.0"  # Update this to your new version
```

3. Build the package:
```bash
# Make sure you're not in the Hatch shell
hatch build
```

4. Test the build:
```bash
# On Windows:
hatch run python -m pip install dist\uxly_1shot_client-1.2.0-py3-none-any.whl

# On Unix-like systems (Linux/macOS):
hatch run python -m pip install dist/uxly_1shot_client-1.2.0-py3-none-any.whl
```

5. Upload to PyPI:
```bash
# First, upload to TestPyPI to verify everything works
python -m twine upload --repository testpypi dist/uxly_1shot_client-1.2.0-py3-none-any.whl dist/uxly_1shot_client-1.2.0.tar.gz

# If everything looks good, upload to the real PyPI
python -m twine upload dist/uxly_1shot_client-1.2.0-py3-none-any.whl dist/uxly_1shot_client-1.2.0.tar.gz

```

Note: You'll need to have a PyPI account and configure your credentials. You can do this by:
1. Creating a `~/.pypirc` file:
```ini
[pypi]
username = your_username
password = your_password
```

Or by using environment variables:
```bash
# On Windows PowerShell:
$env:TWINE_USERNAME="your_username"
$env:TWINE_PASSWORD="your_password"

# On Windows Command Prompt:
set TWINE_USERNAME=your_username
set TWINE_PASSWORD=your_password

# On Unix-like systems (Linux/macOS):
export TWINE_USERNAME=your_username
export TWINE_PASSWORD=your_password
```

**Important**: Make sure you're not in the Hatch shell when running twine commands. The tools should be installed globally and run from your system's Python environment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.