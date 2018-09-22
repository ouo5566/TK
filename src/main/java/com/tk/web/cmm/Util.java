package com.tk.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.LoggerFactory;

public class Util {
	public static Consumer<String> logger = LoggerFactory.getLogger(Util.class)::info;
	public static Function<HttpServletRequest, String> ctx = HttpServletRequest::getContextPath;
}
