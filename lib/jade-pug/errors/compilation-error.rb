# encoding: UTF-8
# frozen_string_literal: true

module JadePug
  #
  # Used for template compilation errors, for example:
  # - any template engine errors
  # - syntax errors in template
  # - any JavaScript exceptions (they are caught by ExecJS)
  #
  class CompilationError < StandardError

  end
end
