# aojs Makefile
# Autonomous Observability in JavaScript

# Variables
NODE := node
NPM := npm
DIST_DIR := dist
SRC_DIR := src
TEST_DIR := test

# Default target
.PHONY: all
all: clean install build test

# Install dependencies
.PHONY: install
install:
	@echo "Installing dependencies..."
	$(NPM) install

# Clean build artifacts
.PHONY: clean
clean:
	@echo "Cleaning build artifacts..."
	rm -rf $(DIST_DIR)
	rm -rf node_modules

# Build the project
.PHONY: build
build:
	@echo "Building aojs..."
	$(NODE) build.js

# Run tests
.PHONY: test
test: build
	@echo "Running tests..."
	$(NODE) --test $(TEST_DIR)/*.test.js

# Run linting
.PHONY: lint
lint:
	@echo "Running ESLint..."
	$(NPM) run lint

# Run the application (example usage)
.PHONY: run
run: build
	@echo "Running example..."
	@$(NODE) -e "import ao from './dist/index.js'; console.log(ao.analyze('Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15'));"

# Analyze sample access logs
.PHONY: analyze
analyze: build
	@echo "Analyzing sample access logs..."
	@$(NODE) dist/log-analyzer.js data/sample_access.log

# Development mode - watch for changes and rebuild
.PHONY: dev
dev:
	@echo "Starting development mode..."
	@echo "Watching for changes in $(SRC_DIR)..."
	@while true; do \
		$(MAKE) build; \
		echo "Waiting for changes..."; \
		sleep 2; \
	done

# Check Node.js version
.PHONY: check-node
check-node:
	@echo "Checking Node.js version..."
	@$(NODE) -v
	@echo "Required: >=18.0.0"

# Help target
.PHONY: help
help:
	@echo "aojs - Autonomous Observability in JavaScript"
	@echo ""
	@echo "Available targets:"
	@echo "  make install    - Install dependencies"
	@echo "  make build      - Build the project"
	@echo "  make test       - Run tests"
	@echo "  make lint       - Run ESLint"
	@echo "  make run        - Run example usage"
	@echo "  make clean      - Clean build artifacts"
	@echo "  make dev        - Start development mode"
	@echo "  make check-node - Check Node.js version"
	@echo "  make help       - Show this help message"
	@echo ""
	@echo "Common workflows:"
	@echo "  make            - Clean, install, build, and test"
	@echo "  make build test - Build and run tests"