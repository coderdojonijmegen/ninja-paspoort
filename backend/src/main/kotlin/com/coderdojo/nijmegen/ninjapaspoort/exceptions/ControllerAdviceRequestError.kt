package com.coderdojo.nijmegen.ninjapaspoort.exceptions

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler
import java.util.*

data class ErrorsDetails(val time: Date, val message: String, val details: String)

@ControllerAdvice
class ControllerAdviceRequestError : ResponseEntityExceptionHandler() {
    @ExceptionHandler(value = [(Exception::class)])
    fun handleUserAlreadyExists(ex: java.lang.Exception,request: WebRequest): ResponseEntity<ErrorsDetails> {
        val errorDetails = ErrorsDetails(Date(),
                "Validation Failed",
                ex.message!!
        )
        return ResponseEntity(errorDetails, HttpStatus.BAD_REQUEST)
    }
}