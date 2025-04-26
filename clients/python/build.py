"""Custom build script for the 1Shot API Python client."""

import os
import shutil
from pathlib import Path


def build():
    """Run custom build steps."""
    # Get the source and build directories
    src_dir = Path("src")
    build_dir = Path("dist")

    # Create the build directory if it doesn't exist
    build_dir.mkdir(exist_ok=True)

    # Copy the README to the build directory
    shutil.copy("README.md", build_dir / "README.md")

    # Copy the license to the build directory
    if os.path.exists("LICENSE"):
        shutil.copy("LICENSE", build_dir / "LICENSE") 