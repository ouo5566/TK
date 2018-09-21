package com.tk.web.forU;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tk.web.cmm.Util;

@RestController
@RequestMapping("/forU")
public class ForUCtrl {
	@GetMapping()
	public void forU() {
		Util.logger.accept(":: ForUCtrl ::");
	}
}
